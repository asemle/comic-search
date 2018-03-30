<template>

    
  <div v-if="!!characters.length" class="ui characters-list cards">
        <div v-for="character in characters" :key="character.url" class="ui card fadeIn-animation">
            <div class="image" :style="{backgroundImage: `url(${character.image})`}">
                <!-- <img :src="character.image" /> -->
            </div>
            <div class="content contentBox" v-on:click="open">
                <div class="header">{{character.name}}</div>
                <div class="description">
                {{character.description}}
                </div>
            </div>
            <div class="extra content">
                <span class="right floated">
                <a target="_blank" :href="character.url">
                    <button class="ui icon purple tiny button">
                        More Info
                    </button>
                </a>
                </span>
            </div>
        </div>
  </div>
  


</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'characters'
  ])
}
</script>

<style>

.grow-enter-active {
    transition: opacity 0.8s
}

.grow-enter {
   opacity: 0
}



.contentBox {
text-overflow: ellipsis;
    max-height: 343px!important;
    overflow: hidden;
}

.description {
    overflow:hidden;
}
.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
}
.characters-list.cards .image {
    background-color: black!important;
    background-position: center center!important;
    background-size: contain!important;
    background-repeat: no-repeat!important; 
    position: relative;
    width: 100%;
    height: 246px;
    overflow: hidden;
}

.ui.card, .ui.cards > .card {
  width: 364px;
}
</style>