import styled from 'styled-components';

export const ModalContainer = styled.div`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000b2;
    z-index: 1200;
    overflow: auto;
    opacity: 1;
  }

  .Modal {
    position: relative;
    background-color: #3d3d3d;
    overflow: hidden;
  }

  img{
      width: 900px;
  }
`;