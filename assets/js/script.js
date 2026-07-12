// Animated Counter

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;

                }

            }

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));