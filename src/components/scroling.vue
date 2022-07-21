<template>
  	<div class="scrolling" >
		<p v-for="lien in lien" v-bind:key="lien"><a :href="lien.lien" target="_blank">{{lien.titre}}</a></p>
	</div>

</template>

<script>
import db from "../firebase/init";
import firebase from "firebase/app";

export default {
async beforeMount() {
                   const liens = await db.collection("liens").where("visible", "==", true).get();
        if (liens.empty) {
            console.log("No matching documents.");
            return;
        }
        liens.forEach(doc => {
            return this.lien.push(doc.data());
        });
},
data() {
    return {
        lien:[]
    }
},
}
</script>

<style lang="scss" scoped>
.scrolling {
	position: relative;
	width: 100%;
	height: 50px;
	overflow: hidden;
	margin-top: 50px;
}
.scrolling p {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	font-size: 1em;
	line-height: 30px;
	color: rgb(0, 0, 0);
	transform: translateX(100%);
	animation: scrolling 15s linear infinite;
    &:hover{
        animation-play-state: paused;
    }
}
@keyframes scrolling {
	0% {
		transform: translateY(100%);
	}
	100% {
		transform: translateY(-100%);
	}
}

</style>