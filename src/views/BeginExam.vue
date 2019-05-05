<template>
  <v-container>
    <div class="sticky">
      <h3>{{ timeLeft }}/{{ endTime }}</h3>
    </div>
    <h2 class="primary--text">Practical Applications of DAX examination</h2>

    <v-flex mt-20>
      <v-card>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="1. What was the running total of revenue for the Pacific sub-region as of 1 September 2016?"
              outline
            ></v-text-field>

            <v-text-field
              label="2. Create a chart showing the percentage of users by sub-region for each month. What percentage of users were in the East North Central sub-region in June?"
              outline
            ></v-text-field>

            <v-btn large depressed color="primary" @click="validate">Submit exam</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>

    <!-- <ul>
      <li v-for="(time, index) in times" :key="index" class="column time">
        <a
          v-on:click.prevent="setTime(time.sec)"
          :class="[
                'button',
                'is-link',
                {'is-active': time.sec === selectedTime && endTime !== 0 }
              ]"
        >{{ time.display }}</a>
      </li>
    </ul>-->
  </v-container>
</template>

<script>
var intervalTimer;
export default {
  data() {
    return {
      selectedTime: 0,
      timeLeft: "00:00",
      endTime: "0",
      times: [
        {
          sec: 3,
          display: "3s"
        },
        {
          sec: 600,
          display: " 10m"
        },
        {
          sec: 1800,
          display: "30m"
        }
      ]
    };
  },
  methods: {
    setTime(seconds) {
      clearInterval(intervalTimer);
      this.timer(seconds);
    },
    timer(seconds) {
      const now = Date.now();
      const end = now + seconds * 1000;
      this.displayTimeLeft(seconds);

      this.selectedTime = seconds;
      // this.initialTime = seconds;
      this.displayEndTime(end);
      this.countdown(end);
    },
    countdown(end) {
      // this.initialTime = this.selectedTime;
      intervalTimer = setInterval(() => {
        const secondsLeft = Math.round((end - Date.now()) / 1000);

        if (secondsLeft === 0) {
          this.endTime = 0;
        }

        if (secondsLeft < 0) {
          clearInterval(intervalTimer);
          return;
        }
        this.displayTimeLeft(secondsLeft);
      }, 1000);
    },
    displayTimeLeft(secondsLeft) {
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      this.timeLeft = `${zeroPadded(minutes)}:${zeroPadded(seconds)}`;
    },
    displayEndTime(timestamp) {
      const end = new Date(timestamp);
      const hour = end.getHours();
      const minutes = end.getMinutes();

      this.endTime = `${hourConvert(hour)}:${zeroPadded(minutes)}`;
    }
  }
};
function zeroPadded(num) {
  // 4 --> 04
  return num < 10 ? `0${num}` : num;
}

function hourConvert(hour) {
  // 15 --> 3
  return hour % 12 || 12;
}
</script>

<style scoped>
body {
  font-family: "Sarpanch", sans-serif;
  color: hsl(0, 0%, 7%);
  background: #f2f1ed;
  background: radial-gradient(hsl(204, 86%, 93%), hsl(204, 86%, 63%));
}
/* ==================
 *  APP
 * ================== */
.countdown {
  margin: 5px 0 30px;
}
h1 {
  text-align: center;
  font-size: 18px;
  color: hsl(204, 86%, 43%);
}
h2 {
  font-size: 20px;
  width: 390px;
  line-height: 1;
  text-align: center;
}
h3 {
  font-size: 20px;
  display: flex;
  align-items: baseline;
  justify-content: center;
}
h3 span {
  width: 70px;
  border-bottom: 2px solid hsl(348, 100%, 71%);
  margin-left: 15px;
  text-align: center;
}
.time {
  display: flex;
  justify-content: center;
}
.columns {
  margin-left: 0;
  margin-right: 0;
}
/* ==================
*  SOCIAL MEDIA
* ================== */
.social-media-footer {
  --font-color: hsl(204, 86%, 99%);
  --font-size: 0.8rem;
  margin-top: 1.9375rem;
}
.social-columns {
  display: flex;
  justify-content: center;

  padding-bottom: 0.625rem;
  font-size: var(--font-size);
  color: var(--font-color);
  width: 100%;
}
.social-columns .column {
  padding: 0.4rem;
  text-align: center;

  /* to work with bulma */
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.social-columns a {
  text-decoration: none;
  color: var(--font-color);

  /* to work with bulma */
  padding-left: 2px;
}
.social-columns a:hover {
  text-decoration: underline;
}
/* GITHUB */
.github-code {
  color: var(--font-color);
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 0.625rem;
}
.github-code a {
  text-decoration: none;
  color: var(--font-color);
}
.github-code a:hover {
  text-decoration: underline;
}

div.sticky {
  position: -webkit-sticky;
  position: sticky;

  top: 5;
  background-color: yellow;
  padding: 50px;
  font-size: 20px;
  width: 200px;
  height: 100px;
  right: 0;
  position: absolute;
}
</style>
