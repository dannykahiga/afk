<template>
  <v-container>
    <h2 class="primary--text">Practical Applications of DAX Exam</h2>
    <v-card xs12 class="mx-auto">
      <v-card-title>
        <h4 class="primary--text">Exam Overview</h4>
      </v-card-title>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 md4 text-xs-left>
            <h3>
              <v-icon medium color="red darken-2">schedule</v-icon>Exam Time:
            </h3>
          </v-flex>
          <v-flex xs12 md8 text-xs-left>
            <h3>30 minutes</h3>
          </v-flex>

          <v-flex xs12 md4 text-xs-left>
            <h3>
              <v-icon medium color="green">offline_pin</v-icon>Pass Mark:
            </h3>
          </v-flex>
          <v-flex xs12 md8 text-xs-left>
            <h3>75%</h3>
          </v-flex>

          <v-flex xs12 md4 text-xs-left>
            <h3>
              <v-icon medium color="light-blue lighten-2">info</v-icon>Additional Info:
            </h3>
          </v-flex>
          <v-flex xs12 md8 text-xs-left>
            <p>
              Please do not round any numerical answers; submit numbers in their entirety.
              When requiring a decimal separator, you should use a period. For example: 1.632
            </p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat large color="primary">go back to course</v-btn>
        <v-btn large color="primary">Begin exam</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
