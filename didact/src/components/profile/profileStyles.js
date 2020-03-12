import styled from "styled-components";

export const PersonWrapper = styled.div`
//   background-color: silver;
  border-radius: 7px;
//   padding: 20px 20px 10px 20px;
  color: #5b5b5b;
  .no-edit {
    display: flex;
    // justify-content: start;
    flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
  }
//   .tool {
//     display: grid;
//     grid-template-rows: 22px 195px 15px;
//     grid-template-columns: 100%;
//     justify-content: start;
//   }
  .person{
    border: 1px solid gray;
	width: 40%;
	margin: 5% 38% auto;
	padding: 2%;
	border-radius: 9px;
	background-color: #ffffff;
	color: color: #5b5b5b;
	box-shadow: 5px 5px 6px -2px whitesmoke;
	transition: transform 0.4s ease-in;
  }
  .person:hover {
	transform: translate(-5px) scale(1.03);
	box-shadow: 10px 10px 10px -2px snow;
}

//   .tool-plus {
//     display: grid;
//     grid-template-rows: 22px 195px 15px;
//     grid-template-columns: 100%;
//     justify-content: start;
//   }

//   .tool-admin {
//     display: grid;
//     grid-template-rows: 22px 195px 15px;
//     grid-template-columns: 100%;
//     justify-content: start;
//     .edit-div {
//       flex-flow: row nowrap;
//       width: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;

//       a {
//         width: 25%;
//         font-size: 16px;
//         color: green;
//       }
//       a:visited {
//         color: green;
//       }
//     }
//   }
//   .tool-admin-plus {
//     display: grid;
//     grid-template-rows: 22px auto 15px auto;
//     grid-template-columns: 100%;
//     justify-content: start;
//     align-items: start;

//     .edit-div {
//       flex-flow: row nowrap;
//       width: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;

//       a {
//         width: 25%;
//         font-size: 16px;
//         color: green;
//       }
//       a:visited {
//         color: green;
//       }
//     }
//   }
//   .drop {
//     display: flex;
//     flex-flow: column wrap;
//     p {
//       text-align: left;
//     }
//   }
//   .img-div {
//     width: 100%;
//     height: 195px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     div {
//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: contain;
//       }
//     }
//   }
  h3 {
    margin: 0;
    padding: 0;
    line-height: 22px;
    font-size: 22px;
    color: #5b5b5b;
  }
  a {
    width: 100%;
    display: block;
    text-align: right;
  }
  .link-anchor {
    color: #242424;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:visited {
      color: #242424;
    }
  }
`;
