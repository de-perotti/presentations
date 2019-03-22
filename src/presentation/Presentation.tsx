import React from 'react';
import {Notes, Text} from 'spectacle';

import { Deck } from '../components/Deck';

import { Cover } from '../sections/cover/Cover';
import { Disclaimer } from '../sections/disclaimer/Disclaimer';
import { Introduction } from '../sections/introduction/Introduction';
import { WhoAmI } from '../sections/whoami/WhoAmI';

import * as AutomatedTests from '../sections/automated/Automated';
import * as Code from '../sections/code/Code';
import * as Conclusion from '../sections/conclusion/Conclusion';
import * as Hook from '../sections/hook/Hook';
import * as References from '../sections/references/References';
import * as Regression from '../sections/regression/Regression';
import * as Storybook from '../sections/storybook/Storybook';

export class Presentation extends React.Component {
  public render() {
    return (
      <Deck>
        <Cover />

        <Introduction />

        <WhoAmI />

        <Disclaimer />

        <Hook.Important />
        <Hook.Easy />
        <Hook.LifeStyle />
        <Hook.NotEverything />
        <Hook.TestTrust />

        <Storybook.What />
        <Storybook.Simple />
        <Storybook.Unifies />
        <Storybook.TestTypes />
        <Storybook.TDD />
        <Storybook.BDD />
        <Storybook.Easeness />

        <Code.StorybookIntermission where='Formik'>
          <Notes>
            The rep must have been previously downloaded
          </Notes>
        </Code.StorybookIntermission>

        <Storybook.Views />
        <Storybook.ShowCase />
        <Storybook.Documentation />
        <Storybook.OnBoarding />
        <Storybook.HowToUse />
        <Storybook.Contributing />
        <Storybook.EffinAwesome />

        <Code.StorybookIntermission where='Storybook'>
          <Text>
            If there is connection
          </Text>
          <Notes>
            <Text>
              The rep must have been previously downloaded
            </Text>
            <Text>
              https://storybooks-official.netlify.com/?path=/story/addons-jest--withtests
            </Text>
          </Notes>
        </Code.StorybookIntermission>

        <Regression.What />
        <Regression.MentalHealth />
        <Regression.Trust />
        <Regression.Refactoring />
        <Regression.ScoutsBoy />
        <Regression.FrontIsDifferent />
        <Regression.ChangeImpact />
        <Regression.QuickAndAssuredAnalysis />
        <Regression.PullRequests />

        <Storybook.Regression.AllowsIt />
        <Storybook.Regression.Options />
        <Storybook.Regression.Loki />
        <Storybook.Regression.FOSS />

        <AutomatedTests.Diffs />
        <AutomatedTests.Snapshots />
        <AutomatedTests.Tolerances />
        <AutomatedTests.Dockerize />

        <Code.RegressionIntermission />

        <Conclusion.Then />
        <Conclusion.Headaches />
        <Conclusion.Easy />
        <Conclusion.Imagination />
        <Conclusion.ToldYa />

        <References.Git />
        <References.ArtsAndDocs />
        <References.Me />
      </Deck>
    );
  }
}
