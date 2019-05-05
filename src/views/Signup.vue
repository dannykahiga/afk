<template>
  <v-container grid-list-md text-xs-center>
    <v-flex pa-5>
      <h2 class="primary--text">Create Account</h2>
    </v-flex>
    <v-layout row wrap>
      <v-flex xs12 md5 lg5 xl5>
        <v-card flat>
          <v-card-text class="pa-5">
            <h5>Select your preferred categories</h5>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-flex pa-10>
                <v-layout row wrap text-xs-center>
                  <v-checkbox
                    label="Alteryx for Data Analysis"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                  ></v-checkbox>
                  <v-spacer></v-spacer>
                  <v-icon color="primary">android</v-icon>
                </v-layout>

                <v-layout row wrap text-xs-center>
                  <v-checkbox
                    label="Alteryx for Data Analysis"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                  ></v-checkbox>
                  <v-spacer></v-spacer>
                  <v-icon color="primary">android</v-icon>
                </v-layout>

                <v-layout row wrap text-xs-center>
                  <v-checkbox
                    label="Alteryx for Data Analysis"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                  ></v-checkbox>
                  <v-spacer></v-spacer>
                  <v-icon color="primary">android</v-icon>
                </v-layout>

                <v-layout row wrap text-xs-center>
                  <v-checkbox
                    label="Alteryx for Data Analysis"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                  ></v-checkbox>
                  <v-spacer></v-spacer>
                  <v-icon color="primary">android</v-icon>
                </v-layout>

                <v-layout row wrap text-xs-center>
                  <v-checkbox
                    label="Alteryx for Data Analysis"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                  ></v-checkbox>
                  <v-spacer></v-spacer>
                  <v-icon color="primary">android</v-icon>
                </v-layout>
              </v-flex>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md7 lg7 xl7>
        <v-card flat>
          <v-card-text class="pa-5">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field outline v-model="fname" label="First Name" required></v-text-field>

              <v-text-field outline v-model="sname" label="Second Name" required></v-text-field>

              <v-text-field outline v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-text-field outline v-model="phone" label="Phone Number" required></v-text-field>

              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>

              <v-btn depressed block large color="success" @click>Sign me up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      fname: "",
      lname: "",
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      checkbox: false
    };
  }
};
</script>

<style>
</style>
