<template>
  <v-container grid-list-md text-xs-center>
    <v-flex pa-5>
      <h2 class="primary--text">Sign In to ALF</h2>
    </v-flex>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 md6 lg6 xl6 sm6>
        <v-card>
          <v-card-title primary-title>
            
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-flex>
                <v-text-field outline v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field
                  outline
                  :append-icon="show2 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show2 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Visible"
                  hint="At least 8 characters"
                  value=""
                  class="input-group--focused"
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-flex>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link to>Forgot Password?</router-link>
            <v-spacer></v-spacer>
            <v-btn large depressed color="primary">sign in</v-btn>
          </v-card-actions>
        </v-card>
        <router-link to>Create account?</router-link>
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
      checkbox: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>

<style>
</style>
