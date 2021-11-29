<template>
  <v-app>
    <div>
      <v-system-bar dark color="primary" app>
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>

      <v-card>
        <v-navigation-drawer
          app
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
        >
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGuK-gMADwhyw/profile-displayphoto-shrink_400_400/0/1613523800434?e=1642636800&v=beta&t=813Ze4JEqrIbhFgYIaaM8TuT0FbsI1fJDYXfF64hX1k"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-title>Lucas Santos</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>

      <v-app-bar color="deep-purple accent-4" dense dark app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Página Principal</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-home-city</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-account-group-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-slider
              v-model="width"
              class="align-self-stretch"
              min="200"
              max="500"
              step="1"
            ></v-slider>

            <v-img
              :aspect-ratio="16 / 9"
              :width="width"
              src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            ></v-img>
          </div>
        </v-container>
      </v-main>

      <v-footer padless app>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Lucas Santos</strong>
        </v-col>
      </v-footer>

      <v-bottom-navigation app :value="value" color="primary">
        <v-btn>
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      computed: {
        username() {
          // We will see what `params` is shortly
          return this.$route.params.username;
        },
      },
      methods: {
        goBack() {
          window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push("/");
        },
      },

      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
        { title: "Support", icon: "mdi-information-outline" },
      ],
      mini: true,
    };
  },
};
</script>
