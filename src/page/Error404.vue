<template>
    <div class="error-404">
        <img src="../assets/image/error404.png" />
    </div>
</template>
<script>
export default {
    name: "Error404",
    created() {
        console.log(
            this.$confirm("hahah", "提示", {
                confirmButtonText: "下载",
                cancelButtonText: "取消",
                type: "warning"
            })
        );
    }
};
</script>
<style lang="scss">
.error-404 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
}
</style>
