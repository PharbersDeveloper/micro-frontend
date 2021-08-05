<template>
    <div class="upload-file-background">
        <div class="upload-file-container">
            <div class="upload-file-header">
                <span class="heading-medium">上传文件</span>
                <div class="icon_cross cursor-pointer" @click="closeUploadWindow"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeUploadWindow() {
            this.$emit('closeUploadWindow', false)
        }
    }
}
</script>

<style lang="scss" scoped>
    .heading-medium {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #25232D;
        letter-spacing: 0.25px;
        line-height: 24px;
        font-weight: 400;
    }

    .icon_cross {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath d='M5.784 5.089l.07.057L10.5 9.793l4.646-4.647a.5.5 0 0 1 .765.638l-.057.07-4.647 4.646 4.647 4.646a.5.5 0 0 1-.638.765l-.07-.057-4.646-4.647-4.646 4.647a.5.5 0 0 1-.765-.638l.057-.07L9.793 10.5 5.146 5.854a.5.5 0 0 1 .638-.765z' fill='%2357565F'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100% !important; 
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .upload-file-background {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(37,35,45,0.55);
        display: flex;
        justify-content: center;
        align-items: center;

        .upload-file-container {
            width: 400px;
            height: 349px;
            background: #FFFFFF;
            box-shadow: 0 0 1px 0 rgba(37,35,45,0.12), 0 4px 8px -2px rgba(37,35,45,0.25);
            border-radius: 2px;

            .upload-file-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 56px;
                padding: 20px 20px 12px 20px;
            }
        }
    }
</style>