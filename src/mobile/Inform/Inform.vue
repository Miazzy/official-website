<template>
    <div class="container flex-col">
        <!-- mobile-header -->
        <MHeader></MHeader>

        <!-- title-container -->
        <div class="title-container flex-col">
            <div class="title-wrapper flex-row">
                <div class="text-title-wrapper flex-col justify-between">
                    <span class="htext-title">资讯中心</span>
                    <span class="htext-title mini">INFORMATION CENTER</span>
                </div>
            </div>
        </div>

        <!-- main-container -->
        <div class="main-container flex-col">

            <div class="tabs-wrapper flex-row justify-between">
                <span class="tab-text">最新资讯&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span class="tab-text">公司动态</span>
            </div>
            <div class="tabs-active-item flex-col"></div>
            <div class="blog-section-wrapper flex-col">
                <div class="blog-image-box flex-col"></div>
                <span class="blog-text">运维一线｜那天，我在水库救起来一只“水晃晃”</span>
            </div>

            <div class="blog-box active flex-row justify-between" @click="handleClick('/mobile/inform/detail')">
                <div class="blog-date-box flex-col justify-between">
                    <span class="text-month">08-29</span> <span class="text-year">2020</span>
                </div>
                <div class="blog-text-wrapper flex-col justify-between">
                    <span class="blog-text-title">喜讯！渔光物联获评2020年“最具影响力运维企业</span>
                    <span class="blog-text-description">渔光物联也将以此为契机，持续深耕“智能化运维”，着力打造“渔光一体智能运营专家”品牌形象。</span>
                </div>
            </div>
            <div class="space-curve-line flex-col"></div>

            <div class="blog-box flex-row justify-between" @click="handleClick('/mobile/inform/detail')">
                <div class="blog-date-box flex-col justify-between">
                    <span class="text-month">08-29</span> <span class="text-year">2020</span>
                </div>
                <div class="blog-text-wrapper flex-col justify-between">
                    <span class="blog-text-title">喜讯！渔光物联获评2020年“最具影响力运维企业</span>
                    <span class="blog-text-description">渔光物联也将以此为契机，持续深耕“智能化运维”，着力打造“渔光一体智能运营专家”品牌形象。</span>
                </div>
            </div>
            <div class="space-curve-line flex-col"></div>

            <div class="blog-box flex-row justify-between" @click="handleClick('/mobile/inform/detail')">
                <div class="blog-date-box flex-col justify-between">
                    <span class="text-month">08-29</span> <span class="text-year">2020</span>
                </div>
                <div class="blog-text-wrapper flex-col justify-between">
                    <span class="blog-text-title">喜讯！渔光物联获评2020年“最具影响力运维企业</span>
                    <span class="blog-text-description">渔光物联也将以此为契机，持续深耕“智能化运维”，着力打造“渔光一体智能运营专家”品牌形象。</span>
                </div>
            </div>
            <div class="space-curve-line flex-col"></div>

            <div class="blog-box flex-row justify-between" @click="handleClick('/mobile/inform/detail')">
                <div class="blog-date-box flex-col justify-between">
                    <span class="text-month">08-29</span> <span class="text-year">2020</span>
                </div>
                <div class="blog-text-wrapper flex-col justify-between">
                    <span class="blog-text-title">喜讯！渔光物联获评2020年“最具影响力运维企业</span>
                    <span class="blog-text-description">渔光物联也将以此为契机，持续深耕“智能化运维”，着力打造“渔光一体智能运营专家”品牌形象。</span>
                </div>
            </div>
            <div class="space-curve-line flex-col"></div>

            <div class="blog-section-box flex-row justify-between" style="margin-top: 3vw;" @click="handleClick('/mobile/inform/detail')">
                <div class="blog-block flex-col"></div>
                <div class="blog-section-text-wrapper flex-col">
                    <span class="blog-section-text-title">春节我在岗丨共抓安全生产，同庆新春佳节</span>
                    <span class="blog-section-paragraph">运一线不打烊，春节期间依旧坚守岗位，全力以赴保障安全生产。<br /></span>
                    <span class="blog-section-description">日期：2024-05-05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编辑：陈婷</span>
                </div>
            </div>
            <div class="space-curve-line flex-col"></div>

            <div class="blog-section-box flex-row justify-between" style="margin-top: 3vw;" @click="handleClick('/mobile/inform/detail')">
                <div class="blog-block flex-col"></div>
                <div class="blog-section-text-wrapper flex-col">
                    <span class="blog-section-text-title">春节我在岗丨共抓安全生产，同庆新春佳节</span>
                    <span class="blog-section-paragraph">运一线不打烊，春节期间依旧坚守岗位，全力以赴保障安全生产。<br /></span>
                    <span class="blog-section-description">日期：2024-05-05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编辑：陈婷</span>
                </div>
            </div>
            <div class="space-curve-line flex-col"></div>

            <div class="blog-section-box flex-row justify-between" style="margin-top: 3vw;" @click="handleClick('/mobile/inform/detail')">
                <div class="blog-block flex-col"></div>
                <div class="blog-section-text-wrapper flex-col">
                    <span class="blog-section-text-title">春节我在岗丨共抓安全生产，同庆新春佳节</span>
                    <span class="blog-section-paragraph">运一线不打烊，春节期间依旧坚守岗位，全力以赴保障安全生产。<br /></span>
                    <span class="blog-section-description">日期：2024-05-05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编辑：陈婷</span>
                </div>
            </div>
            <div class="space-curve-line flex-col"></div>

            <div class="pagination-wrapper flex-row justify-between">
                <img class="pagination-arrow-left"
                    src="https://lanhu-oss.lanhuapp.com/psfdtbzcrnxvjkuq62tws1b016g4932qt23dce9243ac-581e-4e1c-804b-430ec5e30bcc" />
                <img class="pagination-arrow-right"
                    src="https://lanhu-oss.lanhuapp.com/pswjmtwfjxmgqf7674j59vx4ncdjlg6cht21a759c1-d56d-467d-9116-0ea0ee285a52" />
            </div>
        </div>

        <!-- mobile-footer -->
        <MFooter></MFooter>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import MHeader from "@/components/MHeader.vue";
import MFooter from "@/components/MFooter.vue";
import { useRouter } from 'vue-router';
import { setTimexec } from '@/utils/common';

const router = useRouter();

const handleClick = (path, y = 0) => {
    window.scrollTo(0, y);
    router.push(path);
    setTimexec(() => {
        window.scrollTo(0, y);
    }, [0, 50, 100]);
}

</script>
<style lang="less" scoped>
@import '@/assets/style/common.css';

.container {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 100vw;
    height: 318vw;
    overflow: hidden;
}

.title-container {
    height: 66vw;
    width: 100vw;
    background: url('../../assets/images/mobile-inform-banner.jpg');
    background-size: 100% 100%;

    .title-wrapper {
        width: 26.14vw;
        height: 10.94vw;
        margin: 18.4vw 0 24.4vw 37.86vw;

        .text-title-wrapper {
            width: 26.14vw;
            height: 10.94vw;

            .htext-title {
                text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
                width: 26.14vw;
                height: 6.4vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 6.53vw;
                font-family: SourceHanSansCN-Bold;
                font-weight: 700;
                text-align: center;
                white-space: nowrap;
                line-height: 6.54vw;
                margin-top: 12vw;

                &.mini {
                    height: 1.87vw;
                    font-size: 2.26vw;
                    line-height: 2.26vw;
                    margin: 2.66vw auto 0 auto;
                    opacity: 0.75;
                }
            }
        }
    }
}

.main-container {
    width: 100vw;
    height: 227.20vw;
    margin-bottom: 0.14vw;
    background: #fefefe;
    z-index: 1000;

    .tabs-wrapper {
        width: 33.74vw;
        height: 3.6vw;
        margin: 6.4vw 0 0 5.6vw;

        .tab-text {
            width: 13.6vw;
            height: 3.47vw;
            overflow-wrap: break-word;
            color: rgba(0, 0, 0, 1);
            font-size: 3.46vw;
            font-family: SourceHanSansCN-Medium;
            font-weight: 500;
            text-align: left;
            white-space: nowrap;
            line-height: 2vw;
            margin-top: 0.14vw;
        }
    }

    .tabs-active-item {
        background-color: rgba(239, 125, 27, 1);
        border-radius: 1px;
        width: 14.8vw;
        height: 0.54vw;
        margin: 2.26vw 0 0 5.33vw;
    }

    .blog-section-wrapper {
        box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.11);
        background-color: rgba(255, 255, 255, 1);
        width: 89.34vw;
        height: 49.87vw;
        margin: 4.73vw 0 0 5.33vw;

        .blog-image-box {
            box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.11);
            width: 89.34vw;
            height: 40.20vw;
            background: url('../../assets/images/project-case-ahhx.jpg');
            background-size: 100% 100%;
        }

        .blog-text {
            width: 68.27vw;
            height: 3.34vw;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 3.2vw;
            font-family: SourceHanSansCN-Regular;
            font-weight: normal;
            text-align: justifyLeft;
            white-space: nowrap;
            line-height: 5.2vw;
            margin: 2.73vw 0 3.86vw 3.86vw;
        }
    }

    .blog-box {
        width: 88.54vw;
        height: 11.6vw;
        margin: 3.6vw 0 0 5.33vw;

        .blog-date-box {
            width: 10.14vw;
            height: 7.07vw;

            .text-month {
                width: 10.14vw;
                height: 2.94vw;
                overflow-wrap: break-word;
                color: rgba(136, 136, 136, 1);
                font-size: 4vw;
                font-family: SourceHanSansCN-Medium;
                font-weight: 500;
                text-align: left;
                white-space: nowrap;
                line-height: 3.2vw;
            }

            .text-year {
                width: 5.74vw;
                height: 2vw;
                overflow-wrap: break-word;
                color: rgba(187, 187, 187, 1);
                font-size: 2.66vw;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 3.2vw;
                margin-top: 2.14vw;
            }
        }

        .blog-text-wrapper {
            width: 72.4vw;
            height: 11.47vw;
            margin-top: 0.14vw;

            .blog-text-title {
                width: 72.4vw;
                height: 3.2vw;
                overflow-wrap: break-word;
                color: rgba(239, 125, 27, 1);
                font-size: 3.2vw;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 3.2vw;
            }

            .blog-text-description {
                width: 71.07vw;
                height: 6.14vw;
                overflow-wrap: break-word;
                color: rgba(102, 102, 102, 1);
                font-size: 2.66vw;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                line-height: 3.47vw;
                margin: 2.13vw 0 0 0.13vw;
            }
        }

        &:not(.active) {

            .blog-text-wrapper {

                .blog-text-title {
                    color: #333 !important;
                }

                .blog-text-description {
                    color: rgba(102, 102, 102, 1) !important;
                }
            }
        }
    }
}

.space-curve-line {
    background-color: rgba(238, 238, 238, 1);
    width: 89.34vw;
    height: 0.14vw;
    margin: 3.2vw 0 0 5.33vw;
}

.blog-section-box {
    width: 87.74vw;
    height: 16vw;
    margin: 1.2vw 0 0 5.33vw;
}

.blog-block {
    width: 23.2vw;
    height: 16vw;
    background: url('../../assets/images/project-case-ahhx.jpg');
    background-size: 100% 100%;
}

.blog-section-text-wrapper {
    width: 61.34vw;
    height: 11.87vw;
    margin-top: 1.22vw;

    .blog-section-text-title {
        width: 60.54vw;
        height: 3.2vw;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 3.2vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 3.2vw;
        margin-left: 0.14vw;
    }

    .blog-section-paragraph {
        width: 61.34vw;
        height: 3.27vw;
        overflow-wrap: break-word;
        color: #666666;
        font-size: 2.66vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        line-height: 3.27vw;
        margin-top: 1.75vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .blog-section-description {
        width: 34.27vw;
        height: 2.4vw;
        overflow-wrap: break-word;
        color: rgba(102, 102, 102, 1);
        font-size: 2.4vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 2.4vw;
        margin: 1.86vw 0 0 0.4vw;
    }
}



.space-line {
    background-color: rgba(238, 238, 238, 1);
    width: 89.34vw;
    height: 0.14vw;
    margin: 1.46vw 0 0 5.33vw;
}

.pagination-wrapper {
    width: 19.87vw;
    height: 7.47vw;
    margin: 5.86vw 0 0 5.46vw;
}

.pagination-arrow-left {
    width: 7.47vw;
    height: 7.47vw;
}

.pagination-arrow-right {
    width: 7.47vw;
    height: 7.47vw;
}
</style>