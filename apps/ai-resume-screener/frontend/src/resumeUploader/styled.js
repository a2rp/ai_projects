import styled, { keyframes } from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        /* border: 1px solid #f00; */
        max-width: 1440px;
        margin: auto;
        color: white;
        padding: 50px;
        position: relative;
        @media (width<600px) {
            padding: 15px;
        }
    `,

    Heading: styled.h1`
        /* border: 1px solid #f00; */
        margin-bottom: 30px;
        position: relative;

        .ai {
            /* border: 1px solid #f00; */
            display: inline-flex;
            margin-right: 10px;

            .icon {
                position: absolute;

                &.one {
                    left: -20px;
                    top: -15px;
                    color: #fff;
                }
            }
        }
    `,
    Main: styled.div`
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-bottom: 15px;
        @media (width<800px) {
            flex-wrap: wrap;
        }
    `,
    Col1: styled.div`
        /* border: 1px solid #f00; */
        width: 100%;

        .jobDescTitle {
            display: block;
            margin-bottom: 15px;
        }
    `,
    Col2: styled.div`
        width: 100%;

        .uploadResumeDescTitle {
            display: block;
            margin-bottom: 15px;
        }
    `,
    InputWrapper: styled.div`
        background-color: #fff;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;

        border: 2px dashed #aaa;
        padding: 15px;
        text-align: center;
        border-radius: 8px;
        background: #111;
        cursor: pointer;
        color: #ddd;
        transition: 0.3s ease;
        &:hover {
            background: #1a1a1a;
        }
    `,

    Input: styled.input`
        /* border: 1px solid #f00; */
    `,
    Textarea: styled.textarea`
        width: 100%;
        height: 200px;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: #fff;
        resize: none;
    `,
    ButtonsWrapper: styled.div`
        display: flex;
        gap: 15px;
    `,
    Button: styled.button`
        color: white;
        padding: 0.7rem 1.5rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
        height: 60px;
        overflow: hidden;
        /* background-image: linear-gradient(#222, rgb(65, 54, 58), #000); */
        background-color: rgb(0, 0, 0);
        border: 1px solid #aaa;
        transition: 0.2s ease;
        transition-property: box-shadow, background-color, transform;
        &:hover {
            box-shadow: 0 0 15px 1px #222;
            transform: scale(1.02);
        }

        &.analyze {
            /* background: #007bff; */
        }
        &.clearJd {
            /* background: #6c757d; */
        }
        &.resetAll {
            /* background: orangered; */
        }
        &.download {
        }
    `,
    ResultBox: styled.div`
        margin-top: 15px;
        margin-bottom: 15px;
        background: #f8f9fa;
        color: #333;
        padding: 1rem;
        border-radius: 6px;
        display: flex;
        flex-direction: column;

        h1 {
            /* border: 1px solid #f00; */
            text-align: center;
        }
    `,
    DownloadButtonsWrappere: styled.div`
        display: flex;
        gap: 30px;

        .button {
            width: 100%;
            background-color: #000;
            border: 1px solid #fff;
            border-radius: 6px;
            height: 40px;
        }
    `,
    DownloadButton: styled.button`
        margin-top: 1rem;
        background: #222;
        color: #fff;
        border: 1px solid #555;
        padding: 0.7rem 1.2rem;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            background: #333;
            border-color: #777;
        }
    `,

    PreviewResume: styled.div`
        margin-top: 30px;
    `,
};
