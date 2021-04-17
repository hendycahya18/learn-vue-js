const app = {
    data() {
        return {
            message: "Upload Your File",
            uploadMessage: "Ready to Upload!",
            uploading: false,
            loadingImage: "",
            files: [],
            selectedFile: "",
        }
    },
    methods: {
        handleUpload() {
            this.uploading = true;
            this.loadingImage = 'loading.gif';
        },
        browseFile() {
            this.$refs.file.click();
        },
        handleChange(event) {
            const files = event.target.files;
            this.selectedFile = files[0].name;
        },
        cancelUpload() {
            this.uploading = false;
            this.loadingImage = '';
        }
    },
};

const mountedApp = Vue.createApp(app).mount('#app');