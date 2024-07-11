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
                <h2 className={classNames(classes.title, typo.displayMdRegular, color.primaryInverse)}>Why is my deposit
                    or withdrawal on hold?</h2>
                <div className={classes.AccordionWrapper}>
                    <Accordion
                        content="A deposit or withdrawal being On Hold means that it
                            was flagged for one of the reasons below. Some On Hold deposits and withdrawals are automatically released after a certain period
                            of time, while other On Hold deposits and withdrawals will require manual intervention
                            from Kraken's Support team."
                        title="Why is my deposit or withdrawal on hold?"/>
                    <Accordion
                        content="For most cash deposit methods, you will see a unique deposit reference included with the deposit instructions. This deposit reference is very important and needs to be included in your bank transfer."
                        title="Why is the deposit reference important?"/>
                    <Accordion
                        content="The list above is not exhaustive. These institutions are not banks and rely on payment processors or use a single shared bank account in their own name to process payments on their clients’ behalf. Hence, deposits sent from these institutions reach us as transfers from a bank account in the name of a third-party and will have to be returned for this reason."
                        title="Deposits from and withdrawals to third parties"/>
                    <Accordion
                        content="A Trace number is a mandatory unique 15 digit
                            reference number given to each ACH transfer, which can be used to investigate and track
                            missing transfers. A Trace number will be required if we have to reach out to our funding
                            provider." title="What is an ACH trace number?"/>
                    <Accordion
                        content="Certain instant purchases, such as first time ACH Online Banking, Paypal, debit or credit card or digital wallet purchases, will trigger a withdrawal hold for up to 72 hours. Withdrawal holds may also be triggered by deposits from certain banks as well as security reasons. Additional cash purchases made during this 72-hour hold will also be locked for the remainder of the 72 hours.Trading is unaffected, you will still be able to trade throughout the period of the withdrawal hold."
                        title="Why is there a withdrawal hold on my account?"/>
                    <Accordion
                        content="Some banks do not accept transfers involving crypto exchanges and result in withdrawals being rejected and returned to us. To prevent unnecessary delays with crediting these rejected withdrawals back to your Kraken account, the applicable bank is blocked on our system.
If you are trying to withdraw to a bank that is not located in one of the supported regions, you will be prevented from saving these banking details. "
                        title="Bank not allowed"/>
                    <Accordion
                        content="Bank of America makes it easy to wire money to your Kraken account from inside your online banking or in-person at a local Bank of America location. Below are the instructions detailing how to wire money with our Customers Bank funding method."
                        title="How do I send a domestic wire transfer to Kraken from Bank of America?"/>
                    <Accordion
                        content="You can take part in the event until 31.08.2024. After you start the event, you will have 28 days to complete your tasks."
                        title="Can I use Rewards both in the regular and the Pro apps?"/>
                    <Accordion
                        content="Below are instructions on how to wire from your Citibank account using online banking or in-person at a local Citibank location to your Kraken account using the Customers Bank funding method."
                        title="How do I send a domestic wire transfer to Kraken from Citibank?"/>
                    <Accordion
                        content="We only support physical cash (in person) and debit card deposits (in-person) for Canadian Dollars (CAD) via our Canada Post partnership.
For all other cash currency deposits (USD, EUR, GBP, AUD, CHF,) Kraken does not currently accept physical cash, checks, debit cards or credit cards.
Debit or credit card use with the Buy Crypto feature and on the Kraken app is available to instantly purchase a range of cryptocurrencies. This service is currently limited to certain geographical regions, review our Visa and Mastercard purchases article for further information."
                        title="Can I deposit or withdraw using physical cash, debit or credit card or something similar?"/>
                </div>
            </div>
            <DetectButton isActive={false} className={classes.button} btnText="Download"/>
        </Wrapper>
    </div>
}

export default Faq