
const { createApp } = Vue;

createApp ({
    data() {
        return {
            activeItem : 0,
            game : {
                images : [
                    'img/01.webp',
                    'img/02.webp',
                    'img/03.webp',
                    'img/04.webp',
                    'img/05.webp'
                ],
                descriptions : [
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
                    'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay'
                ],
                titles : [
                    'Marvel\'s Spiderman Miles Morales',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    'Marvel\s Avengers'
                ],
            }
        }
    },
    methods: {
        prevImg() {
            this.activeItem--;
            if (this.activeItem < 0) {
                this.activeItem = this.game.images.length - 1;
            }
        },
        nextImg() {
            
            this.activeItem++;
            console.log(this.activeItem);
            if (this.activeItem === this.game.images.length) {
                this.activeItem =  0;
            }
        },
        start() {
            this.activeItem = setInterval (() => {
                this.activeItem++;
                //  condizione che se activimage arriva alla fine dell'array, ritorna alla posizione 0
                if (this.activeItem > this.game.images.length - 1) {
                    this.activeItem = 0;
                } 
            }, 2000);
        },
        stop() {
            clearInterval(this.nextSlide);
        }
    },
    mounted() {
        this.nextSlide =
            this.activeItem = setInterval(() => {
                this.activeItem++;
                //  condizione che se activimage arriva alla fine dell'array, ritorna alla posizione 0
                if (this.activeItem > this.game.images.length - 1) {
                    this.activeItem = 0;
                }
            }, 3000);
    }
}).mount('#app');