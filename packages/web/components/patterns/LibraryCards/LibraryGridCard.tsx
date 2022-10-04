import { Box, VStack, HStack, SpanBox } from '../../elements/LayoutPrimitives'
import { StyledText } from '../../elements/StyledText'
import { removeHTMLTags } from '../ArticleSubtitle'
import { MoreOptionsIcon } from '../../elements/images/MoreOptionsIcon'
import { theme } from '../../tokens/stitches.config'
import { CardMenu } from '../CardMenu'
import { LabelChip } from '../../elements/LabelChip'
import { ProgressBar } from '../../elements/ProgressBar'
import type { LinkedItemCardProps } from './CardTypes'
import { ProgressBarVertical } from '../../elements/ProgressBarVertical'

//Styles
const ellipsisText = {
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  pl: '10px',
  margin: 'auto 0',
}

const cardTitleGridStyle = {
  mt: '0',
  mb: '0',
  fontSize: '18px',
  textAlign: 'left',
  lineHeight: '1.25',
  // whiteSpace: 'nowrap',
  // textOverflow: 'ellipsis',
  width: '100%',
  // overflow: 'hidden',
}

const cardTitleListStyle = {
  ...ellipsisText,
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'left',
}

export function LibraryGridCard(props: LinkedItemCardProps): JSX.Element {
  return (
    <>
      {props.layout !== 'GRID_LAYOUT' ? (
        //   <VStack
        //     css={{
        //       p: '12px',
        //       height: '100%',
        //       // width: '100%',
        //       // maxWidth: '100%',
        //       borderRadius: '8px',
        //       cursor: 'pointer',
        //       // wordBreak: 'break-word',
        //       // overflow: 'clip',
        //       border: '1px solid $libraryActiveMenuItem',
        //       // position: 'relative',
        //     }}
        //     alignment="start"
        //     distribution="start"
        //     onClick={() => {
        //       props.handleAction('showDetail')
        //     }}
        //   >
        //     {/* {props.item.image && props.layout !== 'LIST_LAYOUT' && (
        //   <CoverImage
        //     src={props.item.image}
        //     alt="Link Preview Image"
        //     width="100%"
        //     height={160}
        //     css={{ borderRadius: '8px' }}
        //     onError={(e) => {
        //       ;(e.target as HTMLElement).style.display = 'none'
        //     }}
        //   />
        // )} */}
        //     <VStack
        //       distribution="start"
        //       alignment="start"
        //       css={{
        //         px: '0px',
        //         width: '100%',
        //         pl: '$1',
        //       }}
        //     >
        //       <HStack
        //         alignment="start"
        //         distribution="between"
        //         css={{
        //           width: '100%',
        //           //p: '0px',
        //           //mr: '-12px',
        //           mt: '15px',
        //           display: 'grid',
        //           gridTemplateColumns: '1fr 24px',
        //           gridTemplateRows: '1fr',
        //         }}
        //       >
        //         <CardTitle title={props.item.title} />
        //         <Box
        //           css={{ alignSelf: 'end', alignItems: 'start', height: '100%' }}
        //           onClick={(e) => {
        //             // This is here to prevent menu click events from bubbling
        //             // up and causing us to "click" on the link item.
        //             e.stopPropagation()
        //           }}
        //         >
        //           <CardMenu
        //             item={props.item}
        //             viewer={props.viewer}
        //             triggerElement={
        //               <MoreOptionsIcon
        //                 size={24}
        //                 strokeColor={theme.colors.grayTextContrast.toString()}
        //                 orientation="horizontal"
        //               />
        //             }
        //             actionHandler={props.handleAction}
        //           />
        //         </Box>
        //       </HStack>
        //       <HStack alignment="start" distribution="between">
        //         <StyledText
        //           style="caption"
        //           css={{ fontWeight: '600', margin: '5px 8px 5px 0' }}
        //         >
        //           {props.item.author && (
        //             <SpanBox>{removeHTMLTags(props.item.author)}</SpanBox>
        //           )}
        //           {props.originText && (
        //             <>
        //               <Box
        //                 css={{
        //                   height: '4px',
        //                   width: '4px',
        //                   borderRadius: '50%',
        //                   display: 'inline-block',
        //                   background: 'var(--colors-graySolid)',
        //                 }}
        //               ></Box>
        //               <SpanBox css={{ color: 'var(--colors-graySolid)' }}>
        //                 {props.originText}
        //               </SpanBox>
        //             </>
        //           )}
        //         </StyledText>
        //       </HStack>
        //     </VStack>
        //     <HStack
        //       alignment="start"
        //       distribution="between"
        //       css={{
        //         width: '100%',
        //         pt: '$2',
        //         px: '$1',
        //         pr: '12px',
        //         mt: '7px',
        //         flexGrow: '1',
        //       }}
        //     >
        //       <StyledText
        //         css={{
        //           // m: 0,
        //           // py: '0px',
        //           // mr: '$2',
        //           fontStyle: 'normal',
        //           fontWeight: '400',
        //           fontSize: '14px',
        //           // lineHeight: '125%',
        //           // color: '$grayTextContrast',
        //           // flexGrow: '4',
        //           // overflow: 'hidden',
        //           // display: '-webkit-box',
        //           // WebkitLineClamp: 5,
        //           // WebkitBoxOrient: 'vertical',
        //         }}
        //         data-testid="listDesc"
        //       >
        //         {props.item.description}
        //       </StyledText>
        //     </HStack>
        //     <Box css={{ display: 'block', py: '12px' }}>
        //       {props.item.labels?.map(({ name, color }, index) => (
        //         <LabelChip key={index} text={name || ''} color={color} />
        //       ))}
        //     </Box>
        //     <ProgressBar
        //       fillPercentage={props.item.readingProgressPercent}
        //       fillColor={theme.colors.highlight.toString()}
        //       backgroundColor={theme.colors.lightBorder.toString()}
        //       borderRadius={
        //         props.item.readingProgressPercent === 100
        //           ? '0'
        //           : '0px 8px 8px 0px'
        //       }
        //     />
        //   </VStack>
        'jjjjjjjjjjjj'
      ) : (
        // )}

        // {props.layout === 'LIST_LAYOUT' && (
        <VStack
          distribution="start"
          alignment="start"
          css={{
            width: '100%',
          }}
        >
          <HStack
            alignment="start"
            distribution="between"
            css={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '0.01fr 1fr 2fr 150px',
              gridTemplateRows: '1fr',
              borderBottom: '1px solid $graySeparator',
              height: '45px',
            }}
          >
            <ProgressBarVertical
              fillPercentage={props.item.readingProgressPercent}
              fillColor={theme.colors.highlight.toString()}
              backgroundColor={theme.colors.grayProgressBackground.toString()}
              borderRadius={
                props.item.readingProgressPercent === 100
                  ? '0'
                  : '0px 8px 8px 0px'
              }
              height={'45px'}
            />
            <CardTitle title={props.item.title} />
            <StyledText
              css={{
                ...ellipsisText,
                color: '$grayTextContrast',
              }}
              data-testid="listDesc"
            >
              {/* <Box css={{ display: 'block', py: '12px' }}> */}
              {props.item.labels?.map(({ name, color }, index) => (
                <LabelChip key={index} text={name || ''} color={color} />
              ))}
              {/* </Box> */}
              {props.item.description}
            </StyledText>

            <StyledText
              style="caption"
              css={{ ...ellipsisText, fontWeight: '400' }}
            >
              {props.item.author && (
                <SpanBox>{removeHTMLTags(props.item.author)}</SpanBox>
              )}
            </StyledText>
          </HStack>
        </VStack>
      )}
    </>
  )
}

type CardTitleProps = {
  title: string
}

function CardTitle(
  props: CardTitleProps,
  cardProps: LinkedItemCardProps
): JSX.Element {
  return (
    <StyledText
      style="listTitle"
      data-testid="listTitle"
      css={
        cardProps.layout === 'GRID_LAYOUT'
          ? cardTitleGridStyle
          : cardTitleListStyle
      }
    >
      {props.title}
    </StyledText>
  )
}

// export function LibraryGridCard(props: LinkedItemCardProps): JSX.Element {
//   return (
//     <VStack
//       distribution="start"
//       alignment="start"
//       css={{
//         width: '100%',
//       }}
//     >
//       <HStack
//         alignment="start"
//         distribution="between"
//         css={{
//           width: '100%',
//           display: 'grid',
//           gridTemplateColumns: '0.01fr 1fr 2fr 150px',
//           gridTemplateRows: '1fr',
//           borderBottom: '1px solid $graySeparator',
//           height: '45px',
//         }}
//       >
//         <ProgressBarVertical
//           fillPercentage={props.item.readingProgressPercent}
//           fillColor={theme.colors.highlight.toString()}
//           backgroundColor={theme.colors.grayProgressBackground.toString()}
//           borderRadius={
//             props.item.readingProgressPercent === 100 ? '0' : '0px 8px 8px 0px'
//           }
//           height={'45px'}
//         />
//         <CardTitle title={props.item.title} />
//         <StyledText
//           css={{
//             ...ellipsisText,
//             color: '$grayTextContrast',
//           }}
//           data-testid="listDesc"
//         >
//           {/* <Box css={{ display: 'block', py: '12px' }}> */}
//           {props.item.labels?.map(({ name, color }, index) => (
//             <LabelChip key={index} text={name || ''} color={color} />
//           ))}
//           {/* </Box> */}
//           {props.item.description}
//         </StyledText>

//         <StyledText
//           style="caption"
//           css={{ ...ellipsisText, fontWeight: '400' }}
//         >
//           {props.item.author && (
//             <SpanBox>{removeHTMLTags(props.item.author)}</SpanBox>
//           )}
//         </StyledText>
//       </HStack>
//     </VStack>
//   )
// }

// type CardTitleProps = {
//   title: string
// }
