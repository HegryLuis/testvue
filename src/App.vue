<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script></script>

<style>
@keyframes rotateInfinite {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App {
  text-align: center;
}

.container {
  width: 100%;
  height: 100vh;
  background: #bebebe;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.sticker {
  position: absolute;
  left: 0;
  cursor: pointer;
}

.language-selector {
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.language-option {
  font-family: "Grtsk Giga", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #373737;
  padding: 2px 5px;
  border-radius: 3px;
  cursor: pointer;
  transform: translateX(-10px);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}

.language-option:hover {
  background: #ffcb46;
  color: #fff;
}

.sticker:hover .language-selector {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

.sticker:hover .language-option {
  opacity: 1;
  transform: translateX(0);
}

.language-option:nth-child(1) {
  transition-delay: 0.1s;
}

.language-option:nth-child(2) {
  transition-delay: 0.2s;
}

.wrapper {
  position: relative;
  padding: 20px;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: black;
  transform: scaleY(1);
  transform-origin: bottom;
  transition: transform 2s ease, opacity 1s ease;
  pointer-events: none;
  z-index: 1;
  opacity: 1;
}

.filled .overlay {
  transform: scaleY(0);
  opacity: 0;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  height: 80vh;
  background: radial-gradient(circle at center, #ffcb46 20%, transparent 45%);
  backdrop-filter: blur(10px);
}

.main-text {
  display: block;
  max-width: 80%;
  font-family: "Grtsk Giga", sans-serif;
  font-weight: 700;
  font-size: 7vw;
  color: #373737;
}

.wrapper-text {
  font-family: "Grtsk Giga", sans-serif;
  color: #373737;
  font-size: 20px;
  font-weight: 600;
  transition: 1s;
  cursor: pointer;
}

.wrapper-text:hover {
  color: #fff;
}

.wrapper-text::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: width 1s ease;
}

.wrapper-text:hover::before {
  width: 100%;
}

.what {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) translateY(-50%);
}

.where {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
}

.who {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
}

.wheel {
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: 0;
  right: 20%;
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: default;
}

.wheel__center {
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  background: #000;
  transform: translate(-50%, -50%);
}

.wheel__inner {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.wheel:hover .wheel__content-wrapper {
  animation: rotateInfinite 10s linear infinite;
}

.wheel__content {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform-origin: 0 100%;
  font-family: "Grtsk Giga", sans-serif;
  color: #fff;
  padding-bottom: 50px;
  transition: 300ms;
}

.wheel__inner:nth-child(1) {
  transform: rotate(-150deg);
}

.wheel__inner:nth-child(2) {
  transform: rotate(-60deg);
}

.wheel__inner:nth-child(3) {
  transform: rotate(30deg);
}

/*

*/
.wheel__content:nth-child(1) {
  transform: rotate(5deg);
}

.wheel__content:nth-child(2) {
  transform: rotate(15deg);
}
.wheel__content:nth-child(3) {
  transform: rotate(25deg);
}
.wheel__content:nth-child(4) {
  transform: rotate(35deg);
}

.wheel__content:nth-child(5) {
  transform: rotate(48deg);
}

.wheel__content:nth-child(6) {
  transform: rotate(55deg);
}

.wheel__content:nth-child(7) {
  transform: rotate(65deg);
}

.wheel__content:nth-child(8) {
  transform: rotate(75deg);
}

/*

*/

@media (max-width: 768px) {
  .wheel {
    width: 60px;
    height: 60px;
    bottom: 15%;
  }

  .wheel__content {
    padding-bottom: 40px;
    font-size: 0.8em;
  }
}

@media (max-width: 426px) {
  .wrapper-text {
    display: none;
  }

  .wheel {
    right: 50%;
    bottom: 20%;
  }
}
</style>
