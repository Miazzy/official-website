<template>
    <div class="indicator-component" :style="{ color: props.color }">
        <div class="upper" :style="{ color: props.upcolor }">
            <span class="num">{{ props.num }}</span>
            <span class="unit">
                <span class="sign">+</span>
                <span class="text">{{ props.unit }}</span>
            </span>
        </div>
        <div class="descript">{{ props.descript }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    num: {
        type: [String, Number],
        default: ''
    },
    unit: {
        type: String,
        default: ''
    },
    descript: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '#fefefe'
    },
    upcolor: {
        type: String,
        default: '#fefefe'
    }
})
</script>
<style lang="less" scoped>
.indicator-component {
    position: absolute; 
    width: 180px;
    text-align: center;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    color: #fefefe;
    
    .upper {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            margin: 0 0 0 -4px;
        
            &.num {
                font-size: 42px;
            }

            &.unit {
                font-size: 18px;
                margin: 18px 0 0 8px;

                .sign {
                    margin: 0;
                }

                .text {
                    margin: 0;
                }
            }
        }
    }
    
    .descript {
        font-size: 16px;
        margin: 0 0 0 -28px;
    }
}

</style>