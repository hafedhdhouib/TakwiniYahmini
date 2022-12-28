<template>
    <div class="my-5">

<div class="news-container py-1">
        <div class="title">
            الأخبار
        </div>

        <ul>
            <li v-for="lien in liens" :key="lien">
                <a href="">{{lien.titre}}</a> 
            </li>
        </ul>
    </div></div>
</template>

<script>
import db from "../firebase/init";
export default {
async beforeMount() {
                   const lien = await db.collection("liens").get();
        if (lien.empty) {
            console.log("No matching documents.");
            return;
        }
        lien.forEach(doc => {
            return this.liens.push(doc.data());
        });
},
data() {
    return {
        liens:[]
    }
},
}
</script>

<style lang="scss" scoped>
	/*
.scroll-left {
	position: relative;
	width: 100%;
	height: 50px;
	overflow: hidden;
	margin-top: 50px;}
.scroll-left p {
 position: absolute;
 width: 100%;
 height: 100%;
 margin: 0;
 line-height: 50px;
 text-align: center;
 transform:translateX(70%);
 animation: scroll-left 15s linear infinite;
 &:hover{
        animation-play-state: paused;
    }
}
@keyframes scroll-left {
 0%   {
 transform: translateX(70%); 		
 }
 100% {
 transform: translateX(-70%); 
 }
}

*/
a{
	text-decoration: none;
}
.news-container {
	position: relative;
        width: 100%;
        height: 50px;
        overflow: hidden;

    font-family: "Roboto", sans-serif;
    box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.3);
}

.news-container .title {
    position: absolute;
    background: #25389C;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: white;
    font-weight: bold;
    z-index: 200;
}

.news-container ul {
    display: flex;
    list-style: none;
    margin: 0;
    animation: scroll 20s infinite linear;
	&:hover{
            animation-play-state: paused;
        }
}

.news-container ul li {
    white-space: nowrap;
    padding: 10px 24px;
    color: #494949;
    position: relative;
}

.news-container ul li::before {
    content:"";
    width: 1px;
    height: 100%;
    background: #b8b8b8;
    position: absolute;
    top: 0;
    right: 0;
}

.news-container ul li:last-child::after {
    display: none;
}

@keyframes scroll {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(60%);

    }
}
</style>