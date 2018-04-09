<template>
<div class="hello">
  <img v-on:click="toggleHeart()" src="../assets/logo.jpg">
  <img v-on:click="toggleHeart()" v-if="this.showHeart" src="../assets/1.jpg" alt="#">
  <h1 style="color: white">{{msg}}</h1>
  <div style="float:left;width:100%;margin:20px;">
    <div class="left">
      <h2>1) What stamps do you have?</h2>
      <br>
      <ul>
        <br>
        <p>Total amount: {{currentPostage}}</p>
        <li v-for="stamp in stamps" v-bind:key="stamp.id">
          <p>{{ stamp.value }} ¢ stamps × {{stamp.num}}</p>
        </li>
      </ul>
    </div>
    <div class="middle">
      <h2>2) Enter postage due</h2>
      <br>
        <input type="text" v-model="currentPostage">
        <button v-on:click="getCombination();">Calculate</button>
      <ul>
        <p>Quick shipping rate clicks: </p>
        <li v-for="postage in postages" v-bind:key="postage.id">
          <button v-on:click="getCombination(postage.value)">{{ postage.value }}¢ </button>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    toggleHeart () {
      this.showHeart = !this.showHeart
    },
    getCombination (val) {
      const arr = [50, 37, 29, 22, 13, 10, 8, 5, 2]
      let combination = [0, 0, 0, 0, 0, 0, 0, 0, 0]
      if (!val) {
        val = this.currentPostage
      } else {
        this.currentPostage = val
      }
      if (val <= 0 || isNaN(val)) {
        alert('Please enter a valid number')
      }
      for (let i of this.stamps) {
        i.num = 0
      }
      let i = 0
      while (val > 0) {
        if (val + 2 > arr[i]) {
          val -= arr[i]
          combination[i]++
          this.stamps[i].num++
        } else {
          i++
        }
      }
    }
  },
  data () {
    return {
      msg: 'Postage Calculator',
      showHeart: false,
      currentPostage: 0,
      stamps: [
        {
          id: 0,
          value: 50,
          num: 0
        },
        {
          id: 1,
          value: 37,
          num: 0
        },
        {
          id: 2,
          value: 29,
          num: 0
        },
        {
          id: 3,
          value: 22,
          num: 0
        },
        {
          id: 4,
          value: 13,
          num: 0
        },
        {
          id: 5,
          value: 10,
          num: 0
        },
        {
          id: 6,
          value: 8,
          num: 0
        },
        {
          id: 7,
          value: 5,
          num: 0
        },
        {
          id: 8,
          value: 2,
          num: 0
        }
      ],
      postages: [
        {
          id: 0,
          name: 'Domestic Postcard',
          value: 35
        },
        {
          id: 1,
          name: 'International 1 ',
          value: 115
        },
        {
          id: 3,
          name: 'International 2',
          value: 213
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left, .middle, .right{
  color: black;
  background-color: white;
  opacity: 0.8;
  border-radius: 2px;
  box-shadow: 0 5px 8px 0 rgba(255,255,255,0.2);
}
h1, h2 {
font-weight: normal;
float: left;
margin: 20px;
}
ul, li{
list-style: none;
}
.left{
width: 550px;
height:100%;
float: left;
}
.middle{
width: 550px;
height:100%;
float: left;
margin-left:20px;
margin-right: 20px;
}
img{
width: 100px;
height: 100px;
float: left;
}
a {
color: #42b983;
}
</style>
