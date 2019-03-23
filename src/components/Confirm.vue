<template>
  <v-dialog
    v-model="dialog"
    :max-width="options.width"
    @keydown.esc="cancel"
    v-bind:style="{ zIndex: options.zIndex }"
  >
    <div class="dialog">
      <v-card>
        <v-toolbar dark :color="options.color" dense flat>
          <v-toolbar-title class="card-text">{{ title }}</v-toolbar-title>
          <v-card-actions class="card-actions">
            <!-- <v-spacer></v-spacer> -->
            <v-btn color="primary darken-1" flat="flat" @click.native="agree">Yes</v-btn>
            <v-btn color="grey" flat="flat" @click.native="cancel">Cancel</v-btn>
          </v-card-actions>
        </v-toolbar>
        <v-card-text v-show="!!message">{{ message }}</v-card-text>
      </v-card>
    </div>
  </v-dialog>
</template>

<style>
.dialog {
  width: 100%;
}

.card-text {
  float: left;
}

.card-actions {
  float: right;
}

.v-toolbar__content {
  padding: 10px;
  padding-left: 20px;
}
</style>

<script>
// Imported from: https://gist.github.com/eolant/ba0f8a5c9135d1a146e1db575276177d
export default {
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    options: {
      color: "primary",
      width: 290,
      zIndex: 200
    }
  }),
  methods: {
    open(title, message, options) {
      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    }
  }
};
</script>