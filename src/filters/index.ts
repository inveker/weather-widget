import Vue from "vue";



// Filter to uppercase the first character
Vue.filter('uppercaseFirstChar', (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1)
);