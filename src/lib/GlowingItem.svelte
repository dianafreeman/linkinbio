

<div class="w-full text-left py-3 px-5 my-5 rounded-md ring-2 ring-yellow relative">
    <slot />
</div>

<style>
div:after{
	content: "";
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	box-shadow: 0 0 5px #FFC600,
      0 0 10px #FFC600,
      0 0 15px #FFC600,
      0 0 20px #E900FF,
      0 0 25px #E900FF,
      0 0 30px #5800FF,
      0 0 35px #5800FF,
	  inset 0 0 5px #fff;
}

div:hover:after{
	opacity: 1;
	transition: opacity 0.1s ease-in-out;
}
div:before{
	content: "";
	opacity: 1;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

}
div:hover:before{
	opacity: 1;
	transition: opacity 0.1s ease-in-out;
}

div:hover {
	@apply text-yellow;
	text-shadow: 0 0 5px #E900FF,
      0 0 10px #E900FF;
	}	
</style>