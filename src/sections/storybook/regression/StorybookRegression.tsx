import React from 'react';
import {Heading, Image, Slide, Text} from "spectacle";
import LokiImg from "../../../assets/images/loki.png";
import ItsFoss from "../../../assets/images/foss.jpg";

export class AllowsIt extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          A Love Story
        </Heading>
        <Text>
          {'...Book ♡ Regression'}
        </Text>
      </Slide>
    );
  }
}

export class Options extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Options
        </Heading>
        <Text>
          applitools
        </Text>
        <Text>
          chromatic
        </Text>
        <Text>
          perci
        </Text>
        <Text>
          screener
        </Text>
      </Slide>
    );
  }
}

export class Loki extends React.Component {
  public render() {
    return (
      <Slide>
        <Image src={LokiImg}/>
      </Slide>
    );
  }
}

export class FOSS extends React.Component {
  public render() {
    return (
      <Slide>
        <Image src={ItsFoss}/>
      </Slide>
    );
  }
}
