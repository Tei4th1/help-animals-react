import styled from "styled-components";

export const Container = styled.div`
  margin: 0 120px ;
  position:flex;

   @media (max-width: 1200px) {
    margin 0 120px;
    padding 10px;
}
@media (max-width: 1024px) {
    margin 0 120px;
    padding 10px;
}
  @media (max-width: 768px) {
    margin 0 90px;
    padding 10px;
}
    @media (max-width: 420px) {
    flex-direction: column;
    margin 0 60px;
    padding 10px;
}
    @media (max-width: 340px) {
    margin 0 30px;
    padding 10px;
}

`;
