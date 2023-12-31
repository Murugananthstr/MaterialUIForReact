import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 10 }}>
        <Stack
          spacing={4}
          direction="row"
          alignItems={"center"}
          display="block"
        >
          <Typography variant="h2" component="h1" gutterBottom>
            h2 Headings but similar to h1 semantic also refers to h1
          </Typography>
          <Typography variant="h3"> h3 Headings </Typography>
          <Typography variant="h4"> h4 Headings </Typography>
          <Typography variant="h5"> h5 Headings </Typography>
          <Typography variant="h6"> h6 Headings </Typography>
          <Typography variant="subtitle1"> subtitle1 </Typography>
          <Typography variant="subtitle2"> subtitle2 </Typography>
          <Typography variant="body1">
            This is default variant for body Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis repudiandae corrupti commodi,
            quaerat earum, vero similique est, suscipit laboriosam neque vitae.
            Dolorem similique numquam nostrum maxime voluptatem, architecto
            tenetur aspernatur.{" "}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            modi aliquam vel obcaecati velit saepe aperiam, ab, necessitatibus
            tempore ullam suscipit labore molestiae optio nam. Ducimus voluptas
            velit, animi numquam minima odit tempora nemo quod amet voluptatem
            corporis? Quaerat repudiandae ducimus cupiditate perspiciatis
            voluptate impedit earum, ipsa architecto exercitationem minima
            maxime iste vel officia. Error dolorem vero est, itaque accusamus
            corporis ab sequi explicabo. Vero saepe ipsam atque accusantium
            doloribus asperiores laudantium debitis quo assumenda eius similique
            ad autem, officiis, consequatur, esse ipsa dolore neque adipisci
            eligendi reprehenderit? Voluptates, minima quis autem sed nihil
            blanditiis facere numquam. Commodi, fugiat itaque.{" "}
          </Typography>
          <Typography variant="overline">
            This is Overline, all in caps eventhough the text in small letter
          </Typography>
          <Typography variant="caption" display="block">
            This is Caption, the variant and caption is similar to span this
            block option is used to make you as block level element
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default MuiTypography;
