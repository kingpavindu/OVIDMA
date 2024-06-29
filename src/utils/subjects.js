// Add FAQs in down here by adding or deleting objects and editing there content.
const subjects = () => {
        let items = document.querySelectorAll('.slider .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');

        let active = 3; // Ensure this is a valid index within items length

        function LoadShow() {
            let stt = 0;

            // Reset all items first
            items.forEach((item) => {
                item.style.transform = '';
                item.style.zIndex = '';
                item.style.filter = '';
                item.style.opacity = '';
            });

            // Set properties for active item
            if (items[active]) {
                items[active].style.zIndex = 0;
                items[active].style.filter = 'none';
                items[active].style.opacity = 1;
                items[active].style.transform = 'translateX(0) scale(1)';
            }

            // Set properties for items to the right
            for (let i = active + 1; i < items.length; i++) {
                stt++;
                items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }

            stt = 0;

            // Set properties for items to the left
            for (let i = active - 1; i >= 0; i--) {
                stt++;
                items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
        }

        LoadShow();

        next.onclick = function() {
            if (active + 1 < items.length) {
                active++;
                LoadShow();
            }
        };

        prev.onclick = function() {
            if (active - 1 >= 0) {
                active--;
                LoadShow();
            }
        };
    };
    
    export default subjects;