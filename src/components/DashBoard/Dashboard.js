import styled from "styled-components";

import { useEffect, useState } from "react";

import { CircularProgress, Divider } from "@mui/material";

import AppBar from "./AppBar";
import DashBoardCards from "./DashBoardCards";
import TagDropdown from "./TagDropdown";
import DateDropdown from "./DateDropdown";
import LocationDropdown from "./LocationDropdown";
import Chart from "./Chart";
import { usePostFilter } from "../../hooks/usePostFilter";
import { useGetBrandDetails } from "../../hooks/useGetBrandDetails";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f6f6f6;
`;

const Cntr = styled.div`
  display: flex;
  height: inherit;
  width: 100%;
`;

const DashBoardTitle = styled.div`
  display: flex;
  font-size: 40px;
  margin: 40px 0px;
  font-weight: 400;
  color: #2e3b55;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px;
`;

const AnalyticContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  padding: 0 80px;
  width: 100%;
`;

const DropdownContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: inherit;
  margin-bottom: 80px;
`;

const DashBoard = () => {
  const [location, setLocation] = useState("");
  const [tag, setTag] = useState();
  const [range, setRange] = useState("DAY");
  const [graphData, setGraphData] = useState();

  const { isLoading, data, refetch } = useGetBrandDetails();

  const { mutateAsync } = usePostFilter({
    onSuccess: (data) => {
      if (data) {
        setGraphData(data);
      }
    },
    onError: (err) => {
      console.log("there was an error:", err);
    },
  });

  useEffect(() => {
    data &&
      mutateAsync({
        tags:
          tag?.length !== 0
            ? tag?.map((item) => item.name)
            : data?.org?.brands[0]?.tags?.map((item) => item.name),
        locations: location
          ? [location]
          : data?.org?.brands[0]?.locations?.map((item) => item.location),
        timeInterval: range,
      });
  }, [isLoading, location, range, tag]);

  if (isLoading) {
    return <CircularProgress />;
  }
  console.log("tag", tag);
  return (
    <Container>
      <AppBar />
      <Cntr>
        <Content>
          <DashBoardTitle>{data?.org?.brands[0]?.name}</DashBoardTitle>
          <DashBoardCards graphData={graphData} />
        </Content>
        <Divider orientation="vertical" flexItem sx={{ height: "inherit" }} />
        <AnalyticContent>
          <DropdownContent>
            {data && (
              <TagDropdown
                tag={tag}
                setTag={setTag}
                tags={data?.org?.brands[0]?.tags}
              />
            )}
            {data && (
              <LocationDropdown
                location={location}
                setLocation={setLocation}
                locations={data?.org?.brands[0]?.locations}
              />
            )}
            <DateDropdown range={range} setRange={setRange} />
          </DropdownContent>
          <Chart trendData={graphData?.data} />
        </AnalyticContent>
      </Cntr>
    </Container>
  );
};

export default DashBoard;
