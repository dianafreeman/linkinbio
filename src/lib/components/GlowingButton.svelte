
<script>
    export let classes;
  </script>
  <button
     class="{classes} faded-gradient ring-2 ring-yellow relative"
  >
    <slot />
  </button>
  
  <style lang="scss">
    .faded-gradient {
      &:before {
        content: '';
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      &:after {
        content: '';
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 5px #ffc600, 0 0 10px #ffc600, 0 0 15px #ffc600, 0 0 20px #e900ff,
          0 0 25px #e900ff, 0 0 30px #5800ff, 0 0 35px #5800ff, inset 0 0 5px #fff;
      }
      &:hover,
      &:focus,
      &:active {
        color: #ffc600;
        text-shadow: 0 0 5px #e900ff, 0 0 10px #e900ff;
        transition: all 0.5s ease-in-out;
  
        &:before {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }
        &:after {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }
      }
    }
  </style>
  