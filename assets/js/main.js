 document.addEventListener("DOMContentLoaded", () => {
        const input = document.getElementById("pin");
        const dotsContainer = document.querySelector(".dots");
        const keys = document.querySelectorAll(".keys button");

        keys.forEach((key) => {
          key.addEventListener("click", (e) => {
            console.log(e.target);
            if (e.target.closest(".clear")) {
              removeDot();
              input.value = input.value.slice(0, -1);
            } else if (e.target.closest(".next")) {
              //Next Method
            } else {
              input.value += key.innerText;
              addDot();
            }
          });
        });

        function addDot() {
          const dot = document.createElement("div");
          dot.className = "dot";
          dotsContainer.appendChild(dot);
        }

        function removeDot() {
          const dots = dotsContainer.querySelectorAll(".dot");
          if (dots.length > 0) {
            const lastDot = dots[dots.length - 1];
            lastDot.classList.add("removing");
            setTimeout(() => {
              dotsContainer.removeChild(lastDot);
            }, 100);
          }
        }
      });