<template>
  <div>
    <img :src="imageData.url" alt="Loaded Image" @load="onImageLoad" />
  </div>
</template>
  
  <script>
export default {
  props: {
    bitArray: {
      type: Uint8Array, // Set the prop type to Uint8Array
      required: true,
    },
  },
  data() {
    return {
      imageData: {
        url: "", // This will hold the data URL of the loaded image
      },
    };
  },
  methods: {
    loadBitArrayImage() {
      // Convert the BitArray to a data URL
      const base64String = btoa(String.fromCharCode.apply(null, this.bitArray));
      this.imageData.url = `data:image/png;base64,${base64String}`;
    },
    onImageLoad() {
      // Handle image load (optional)
    },
  },
  mounted() {
    this.loadBitArrayImage(); // Load the BitArray image when the component is mounted
  },
};
</script>
  