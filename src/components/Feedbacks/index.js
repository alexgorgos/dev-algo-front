import * as React from "react";
import Box from "@mui/material/Box";
import Feedback from "../Feedback";

import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";

const Feedbacks = ({ bgcolor, maxWidth, feedbacks }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const AdaptiveHeight = (slider) => {
    function updateHeight() {
      slider.container.style.height =
        slider.slides[slider.track.details.rel].offsetHeight + "px";
    }
    slider.on("created", updateHeight);
    slider.on("slideChanged", updateHeight);
  };

  return (
    <Box
      className="navigation-wrapper"
      py={{ xs: 10, md: 20 }}
      sx={{ bgcolor: bgcolor }}
    >
      <Box ref={sliderRef} className="keen-slider">
        {feedbacks.length &&
          feedbacks.map((feedback, i) => {
            return (
              <Feedback
                key={i}
                maxWidth={maxWidth}
                name={feedback.name}
                position={feedback.position}
                content={feedback.content}
                className="keen-slider__slide"
              />
            );
          })}
      </Box>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </Box>
  );
};

export default Feedbacks;
