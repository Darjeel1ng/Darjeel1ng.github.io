<script>
  
  export default {
    data() {
      return {
        msg: '',
        count : 0,
        players : 1,
        ishidden : true,
        finished: false,
        story: '',
        msg1: ''
      }
    }
}

</script>

<template>
  <div class = "start">
    <h1>
      Exquisite Corpse
    </h1>
    <h2 v-if= "count == 0">
    Number of players: {{players}}
    </h2>
    <input v-if= "count == 0" v-model="players">
    <button v-on:click="count++ , ishidden = false" v-if="count == 0" @click="enter">Submit</button>
    
    <h2 v-for= "i in players" v-if="!ishidden && count <= players">
    Player {{count}}/{{players}} write your sentence:
      <br>
      <br>
      {{msg1}}
      <br>
      {{msg}}
      <br>
    <input v-model="msg">
    <button v-on:click="count++ , story = story.concat(msg), msg1 = msg, msg = ''" @click="enter">Submit</button>
      
    </h2>
    <button v-on:click= "finished = true, ishidden = ! ishidden" v-if="count > players && !ishidden" @click="enter">
      View Story
    </button>
    
    <h3 v-if="finished && count > players">{{story}}</h3>
    
  </div>
</template>

<style>
     .start {
    background-color: rgb(201, 199, 199);
    color: rgb(0, 0, 0);
    cursor: pointer;
    padding: 12px;
    width: 100%;
    border: none;
    text-align: center;
    outline: none;
    font-family: 'Papyrus', fantasy;
    font-size: 18px;
    }
  </style>
  