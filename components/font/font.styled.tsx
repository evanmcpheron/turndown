// import { TurndownObject } from "@/helpers";
// import { getGetFontSize } from "./font.helper";
// import type { FontProperties } from "./font.types";

import { useTheme } from '@/context/theme/theme.context';
import { StyleSheet, Text, View } from 'react-native';
import { styled } from 'styled-components/native';
import { FontProperties } from "./font.types";



export const NormalizeLabels = styled(View)`
  * {
    margin-block-end: 0;
    margin-block-start: 0;
  }
`;

// export const H1Container = styled<FontProperties>("h1")`
//   ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 3rem; .phone & { font-size: 3rem; }` : ``}
//     ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}

//   line-height: 1;
//   ${(props: FontProperties) => {
//     return props.lineHeight
//       ? `line-height: ${props.lineHeight} !important;`
//       : ``;
//   }}

//   letter-spacing: -0.0625rem;
//   .standalone & { }
// `;

// export const H2Container = styled<FontProperties>("h2")`
//   ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 2.4rem; .phone & { font-size: 2.4rem; }` : ``}
//   ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}
  
//   line-height: 1.067; 
//     ${(props: FontProperties) => {
//       return props.lineHeight
//         ? `line-height: ${props.lineHeight} !important;`
//         : ``;
//     }}

//   letter-spacing: -0.05rem;
  
// `;

// export const H3Container = styled<FontProperties>("h3")`
//   ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 2rem; .phone & { font-size: 2rem; }` : ``}
//   ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}
  
//   line-height: 1.083; 
//     ${(props: FontProperties) => {
//       return props.lineHeight
//         ? `line-height: ${props.lineHeight} !important;`
//         : ``;
//     }}

//   letter-spacing: -0.0375rem;
  
// `;

// export const H4Container = styled<FontProperties>("h4")`
//   ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 1.7rem; .phone & { font-size: 1.7rem; }` : ``}
//   ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}
  
//   line-height: 1; 
//     ${(props: FontProperties) => {
//       return props.lineHeight
//         ? `line-height: ${props.lineHeight} !important;`
//         : ``;
//     }}

//   letter-spacing: -0.025rem;
  
// `;

// export const H5Container = styled<FontProperties>("h5")`
//   ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 1.5rem; .phone & { font-size: 1.5rem; }` : ``}
//   ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}
  
//   line-height: 1; 
//     ${(props: FontProperties) => {
//       return props.lineHeight
//         ? `line-height: ${props.lineHeight} !important;`
//         : ``;
//     }}

//   letter-spacing: -0.0125rem; 
// `;

// export const H6Container = styled<FontProperties>("h6")`
//   ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 1.3rem; .phone & { font-size: 1.3rem; }` : ``}
//   ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}

  
//   line-height: 1; 
//     ${(props: FontProperties) => {
//       return props.lineHeight
//         ? `line-height: ${props.lineHeight} !important;`
//         : ``;
//     }}

//   letter-spacing: -0.00625rem; 
// `;

// export const LeadContainer = styled<FontProperties>("p")`
//   ${(props: FontProperties) => (!props.font ? `font: var(--font-medium);` : ``)}
//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 1.5rem; .phone & { font-size: 1.7rem; }` : ``}
//   ${(props: FontProperties) => (!props.weight ? `font-weight: normal;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}
 
//   line-height: 1.5; 
//     ${(props: FontProperties) => {
//       return props.lineHeight
//         ? `line-height: ${props.lineHeight} !important;`
//         : ``;
//     }}

//   letter-spacing: -0.015625rem; 
// `;

export const BodyContainer = (props: FontProperties) => {
  const {colors} = useTheme();
  const {size, weight, lineHeight, children} = props;

  const styles =  StyleSheet.create({
    text: {
      color: colors.text
    }
  })

  return <Text style={styles.text}>{children}</Text>
}
// export const BodyContainer = styled<FontProperties>("span")`

//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 1.2rem; .phone & { font-size: 1.4rem; }` : ``}
//   ${(props: FontProperties) => (!props.weight ? `font-weight: normal;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}
 
//   line-height: 1; 
//     ${(props: FontProperties) => {
//       return props.lineHeight
//         ? `line-height: ${props.lineHeight} !important;`
//         : ``;
//     }}

//   letter-spacing: -0.00625rem; 
// `;

// export const SmallContainer = styled<FontProperties>("span")`
 
//   ${(props: FontProperties) =>
//     !props.size ? `font-size: 1rem; .phone & { font-size: 1.2rem; }` : ``}
//   ${(props: FontProperties) => (!props.weight ? `font-weight: normal;` : ``)}

//   ${(props: FontProperties) => {
//     return renderCssOptions(props);
//   }}

//   ${(props: FontProperties) => {
//     return props.font ? styles.typography.family : ``;
//   }}

//   ${(props: FontProperties) => {
//     return props.size ? getGetFontSize(props) : ``;
//   }}
 
//   line-height: 1.47059; 
//     ${(props: FontProperties) => {
//       return props.lineHeight
//         ? `line-height: ${props.lineHeight} !important;`
//         : ``;
//     }}

//   letter-spacing: -0.00625rem; 
// `;
