import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GamecardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height={"200px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
};

export default GamecardSkeleton;
