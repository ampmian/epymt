import QuestionBox from "../qBox";
import Link from "next/link";
import { translation } from '@/app/i18n-index.js';

export default async function Student({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "faq");
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl/8 my-4">{t("header_1")}</h2>
            <QuestionBox
                lang={lng}
                question={["My school can pay the tuition fees for students participate in EPYMT. May I obtain a receipt as proof?", "校方可以為報讀課程的學生代為繳交學費，我可否獲得收據作為證明？"]}
                answer={[<span  key="0">Yes, please contact us by <a href="mailto:epymt.math@cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt.math@cuhk.edu.hk</a>. We will then issue an invoice to the School for tuition fee settlement.</span>
                    , <span  key="1">可以，請通過 <a href="mailto:epymt.math@cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt.math@cuhk.edu.hk</a> 與我們聯繫。我們隨後可向學校發出發票，以結算學費。</span>
                ]}
            />
            <QuestionBox
                lang={lng}
                question={["What if a student can only attend several dates of the course?", "如果學生只能參加課程的其中幾天，該怎麼辦？"]}
                answer={["Our courses are intensive and demand significant effort to master the material. Therefore, attending all course activities is strongly advised. Please note that a certificate will only be issued if you pass the subject assessment and attend 7 or more days.", "我們的課程非常緊湊，而且需要付出極大努力才能掌握課程內容。因此，我們強烈建議學生出席所有課程活動。請注意，課程證書僅在通過科目評估並參加7天或以上的情況下才會發放。"]}
            />
            <QuestionBox
                lang={lng}
                question={["Can junior secondary students participate in the EPYMT?", "初中學生可以參加EPYMT嗎？"]}
                answer={["We welcome junior form students to participate in EPYMT. However, please note that EPYMT introduces more advanced and sophisticated mathematics than what you learn in school, so students should be mature enough to face difficulties and challenges.", "我們歡迎低年級學生參加數學英材精進課程，但請注意此課程教授的數學內容較學校課程更為進階和複雜，因此學生需具備良好的能力和態度面對困難和挑戰。"]}
            />
            <QuestionBox
                lang={lng}
                question={["Does EPYMT offer scholarships? If so, how much is the scholarship?", "EPYMT會提供獎學金嗎？金額為多少？"]}
                answer={["Students with excellent performance will be awarded a scholarship ranging from $2,100 to $2,800.", "表現優異的學生將獲頒發2,100 元至 2,800 元不等的獎學金。"]}
            />
            <QuestionBox
                lang={lng}
                question={["If students receive financial assistance for the programme, are they still eligible for the scholarship?", "若學生已獲得本計劃的資助，是否仍有資格獲得獎學金？"]}
                answer={["Yes, they are still eligible. Financial assistance does not affect a student's eligibility for the scholarship.", "是的，他們仍符合資格。資助並不影響獎學金的領取資格。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_2")}</h2>
            <QuestionBox
                lang={lng}
                question={["If my child misses the application deadline, can special approval be granted for a late submission?", "如果我的子女錯過了截止日期，是否可以獲得特別批准逾期遞交申請？"]}
                answer={[<span  key="0">We may exercise discretion to process late applications for students with exceptional reasons. However, to ensure the fairness of the admission test, applications submitted after the examination has taken place will not be accepted.</span>
                    , <span  key="1">學生如有特殊理由，我們可酌情處理逾期遞交之申請。但是，為確保入學試的公平性，入學試後提交之申請恕不接受。</span>
                ]}
            />
            <QuestionBox
                lang={lng}
                question={["Under what financial conditions can a student apply for financial assistance? How much support will be provided?", "有經濟需要的學生可申請經濟援助嗎？可獲的資助金額有多少？"]}
                answer={[<span  key="0">Students who receive "full" or "half" grants under the Student Financial Assistance Scheme approved by the Working Family and Student Financial Assistance Agency in that academic year are eligible for a 50% tuition fee remission. Students who are receiving assistance under the Comprehensive Social Security Assistance (CSSA) Scheme from the time of application until course completion qualify for full tuition fee remission.</span>
                    , <span  key="1">如學生於該學年獲在職家庭及學生資助事務處批核的「學生資助計劃」下之「全額」或「半額」資助，則可獲課程費用的「半額」減免；若學生於申請及修讀課程期間正領取「綜合社會保障援助（綜援）計劃」援助，則可獲課程費用的「全額」減免。</span>
                ]}
            />            
        </div>
    );
};