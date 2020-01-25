import React from "react";
import { Button } from "@chakra-ui/core";

export default function({ direction, currentPage, setCurrentPage, maxpage }) {
  const handleClick = () => {
    if (direction === "previous") setCurrentPage(page => page - 1);
    if (direction === "next") setCurrentPage(page => page + 1);
  };

  const isPreviousDisabled = direction === "previous" && currentPage <= 1;
  const isNextDisabled = direction === "next" && currentPage >= maxpage;
  return (
    <Button
      variantColor="teal"
      variant="solid"
      size="lg"
      onClick={handleClick}
      disabled={isNextDisabled || isPreviousDisabled}
    >
      {direction}
    </Button>
  );
}
