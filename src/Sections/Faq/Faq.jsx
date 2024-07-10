import classes from "./Faq.module.css"
import typo from "../../typo.module.css"
import color from "../../textColor.module.css"
import Wrapper from "../../Components/Wrapper/Wrapper";
import Accordion from "../../Components/Accordion/Accordion";
import classNames from "classnames";
import DetectButton from "../../Components/DetectButton/DetectButton";


function Faq() {
    return <div className={classes.faq}>
        <Wrapper>
            <div className={classes.container}>
                <h2 className={classNames(classes.title, typo.displayMdRegular, color.primaryInverse)}>Frequently Asked Questions</h2>
                <div className={classes.AccordionWrapper}>
                    <Accordion
                        content={<p className={classes.textStyle}>Rewards enables you to earn crypto on every eligible
                            asset in your account. By
                            completing the tasks a Total Percentage Rate (TPR) will be compounded and applied to your
                            assets. <p>To get Rewards you simply need to take part in the Rewards Period activity. You
                                need to download the desktop app, login or sign up, go to My Events section, find the
                                Rewards Period event and click the Start button. Complete weekly tasks, claim your
                                rewards and increase the TPR. When the event is finished, your TPR will be applied to
                                your eligible assets within 3(three) days.</p> Assets enabled in Rewards are still
                            available to trade (including Spot and Margin trades) or withdraw at any time.</p>}
                        title="Who can use Rewards?"/>
                    <Accordion
                        content="The weekly tasks require you to complete the tasks within a certain time period in order to claim the rewards. Your rewards must be claimed within the Reward Period event, and will expire thereafter. We recommend that you start the weekly tasks and claim the rewards at the earliest possible time. "
                        title="How do I turn Rewards on or off?"/>
                    <Accordion
                        content="Each asset will earn rewards at Total Percentage Rate (TPR). The reward rate will be paid out in kind. For example, if you are holding DOT you will receive your reward in DOT. In addition, any new funds deposited to your account will fall within the scope of the promotion, but only if you deposit them until the Rewards Period end."
                        title="When are my earnings paid out?"/>
                    <Accordion
                        content={<p className={classes.textStyle}>You can earn rewards for any eligible asset with a
                            balance of more than 1 USD. There is no limit to the amount of rewards that can be earned,
                            however the total amount of each asset eligible for Rewards at any given time is
                            capped. <p>For example, if the cap on DOT is 500 DOT, and you have 300 DOT, you will earn
                                the total percentage rate on all of your assets. If you have 900 DOT, you will earn on
                                the first 500 and not on the remaining 400.</p>
                            <p>You can check total amount of the other assets eligible for rewards in "My Rewards"
                                section in the Desktop App.</p></p>} title="What are the limits??"/>
                    <Accordion
                        content="You can take part in the event until 31.08.2024. After you start the event, you will have 28 days to complete your tasks."
                        title="Where can I see my rewards?"/>
                    <Accordion
                        content="You can take part in the event until 31.08.2024. After you start the event, you will have 28 days to complete your tasks."
                        title="What is staking?"/>
                    <Accordion
                        content="You can take part in the event until 31.08.2024. After you start the event, you will have 28 days to complete your tasks."
                        title="What are Opt-In Rewards?"/>
                    <Accordion
                        content="You can take part in the event until 31.08.2024. After you start the event, you will have 28 days to complete your tasks."
                        title="Can I use Rewards both in the regular and the Pro apps?"/>
                    <Accordion
                        content="You can take part in the event until 31.08.2024. After you start the event, you will have 28 days to complete your tasks."
                        title="Is there a fee for using Rewards?"/>
                    <Accordion
                        content="You can take part in the event until 31.08.2024. After you start the event, you will have 28 days to complete your tasks."
                        title="Do I need to pay tax on rewards generated by Rewards?"/>
                </div>
            </div>
            <DetectButton isActive={false} className={classes.button} btnText="Download"/>
        </Wrapper>
    </div>
}

export default Faq