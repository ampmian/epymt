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
                question={["How do I choose the courses of EPYMT?", "我應該如何選擇適合自己的課程？"]}
                answer={
                    [<div className="flex flex-col gap-2" key="0">
                        <p>There are several courses of different levels for you to choose. In general, if you are promoting to Secondary 4 or above, if you enjoy mathematics and usually are the better ones in your class, there should be a course suitable for you. If you are of lower forms but already have mathematics skills of higher forms, you may also find a suitable course according to the following levels.</p>
                        <div className="overflow-x-auto mx-2 my-4 rounded-lg border border-gray-400">
                            <table className="table-auto w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="px-2 py-2 w-1/2">Course</th>
                                        <th className="px-2 py-2">Target Students</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2"><p>Towards Modern Algebra (SAYT1014)</p><p>Complex Numbers and Analytic Geometry (SAYT1034)</p><p>Introduction to Discrete Mathematics (SAYT1084)</p></td>
                                        <td className="px-2 py-2">Students who have high competence in abstract mathematical reasoning, and are promoting to Secondary 4 or Secondary 5.</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">Number Theory and Cryptography (SAYT1114)</td>
                                        <td className="px-2 py-2">Students who are promoting to Secondary 5 or 6, and have good knowledge of algebra.</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">Towards Differential Geometry (SAYT1134)</td>
                                        <td className="px-2 py-2">Students who are promoting to Secondary 5 or 6, and have good knowledge of calculus and geometry. An exposure to physics will be helpful.</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">Understanding Non-Euclidean Geometry (SAYT1214)</td>
                                        <td className="px-2 py-2">Students who are promoting to Secondary 5 or 6, and have good knowledge of complex numbers, calculus and geometry.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <span>An Admission Screening Test will be conducted to evaluate your mathematical maturity.</span>
                        <span>For course details and registration, please visit <Link href="/en/course-information" className="text-indigo-500 dark:text-indigo-300">here</Link>.</span>
                    </div>, <div className="flex flex-col gap-2" key="0">
                        <p>我們有多個不同程度的課程可供選擇。一般而言，如果你是中四或以上的學生，喜歡數學又在班上屬於較優秀的一批，那麼應該會有適合你的課程。如果你是低年級學生，但已經具備較高年級的數學能力，你也可以根據以下表格找到合適的課程。</p>
                        <div class="overflow-x-auto mx-2 my-4 rounded-lg border border-gray-400">
                            <table className="table-auto w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="px-2 py-2 w-1/3">課程</th>
                                        <th className="px-2 py-2">對象</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2"><p>近世代數初探 (SAYT1014)</p><p>複數與解析幾何 (SAYT1034)</p><p>離散數學導論 (SAYT1084)</p></td>
                                        <td className="px-2 py-2">準備升讀中四或中五，並具備良好的抽象數學推理能力的同學。</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">數論與密碼學 (SAYT1114)</td>
                                        <td className="px-2 py-2">準備升讀中五或中六，並具備良好的代數知識的同學。</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">微分幾何初探 (SAYT1134)</td>
                                        <td className="px-2 py-2">準備升讀中五或中六，並具備良好的微積分及幾何，甚至物理知識的同學。</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">非歐幾何賞析 (SAYT1214)</td>
                                        <td className="px-2 py-2">準備升讀中五或中六，並具備良好的複數、微積分及幾何知識的同學。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <span>我們將透過入學試評估你的數學程度以決定是否錄取。</span>
                        <span>
                            課程詳情與報名，請參閱
                            <Link href="/zh-Hant/course-information" className="text-indigo-500 dark:text-indigo-300">
                                此處</Link>。
                        </span>
                    </div>]
                }
            />
            <QuestionBox
                lang={lng}
                question={["How much time and effort do I need to spend on EPYMT?", "我需要花多少時間和精力在 EPYMT？"]}
                answer={["You need to spend 3 intensive weeks on a course. Besides lessons on 9 whole days, you need the other days to prepare, work on exercises, and review. The learning pace is fast and the course schedule is tight. A lot of after class revision is needed. Students should be highly self-motivated and committed. Also, students are expected to be very curious and fond of exploring mathematics beyond his/her level. Otherwise, many of them will lag behind.", "你需要在三個密集的星期內完成一個課程。除了九個整天的上課時間外，你還需要利用其他日子來預習、做練習和複習。學習節奏很快，課程安排緊湊，需要大量課後溫習。學生應該具備高度的自我驅動力和投入度。此外，學生應該對數學充滿好奇心，並樂於探索超越自己程度的數學。否則，很多學生會跟不上進度。"]}
            />
            <QuestionBox
                lang={lng}
                question={["What language will be conducted in the courses?", "會使用什麼語言上課？"]}
                answer={["The lecturers and teaching assistants will use Cantonese in class but all notes and teaching materials are written in English.", "授課老師和助教會以粵語授課，但所有講義和教材均以英文編寫。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_2")}</h2>
            <QuestionBox
                lang={lng}
                question={["I am mathematically well beyond the average of my age. However, I am only promoting to Secondary 3 (or any junior form), am I eligible to participate in EPYMT?", "我在數學方面遠超同齡學生，但我只是升讀中三（或更低年級），我可否參加數學英材精進課程？"]}
                answer={["We welcome junior form students to participate in EPYMT. However, please note that EPYMT introduces more advanced and sophisticated mathematics than what you learn in school, so you should be mature enough to face difficulties and challenges.", "我們歡迎低年級學生參加數學英材精進課程，但請注意此課程教授的數學內容較學校課程更為進階和複雜，因此你需具備良好的能力和態度面對困難和挑戰。"]}
            />
            <QuestionBox
                lang={lng}
                question={["I am not a local student, can I still apply for EPYMT?", "我並非本地學生，我可否參加數學英材精進課程？"]}
                answer={["Yes, please ensure you can attend the course in person and understand Cantonese", "可以，但請確保你能親身出席課堂活動以及以粵語聽課"]}
            />
            <QuestionBox
                lang={lng}
                question={["What if I can only attend several dates of the course?", "如果我只能參加課程的其中幾天，該怎麼辦？"]}
                answer={["Our courses are intensive and demand significant effort to master the material. Therefore, attending all course activities is strongly advised. Please note that a certificate will only be issued if you pass the subject assessment and attend 7 or more days.", "我們的課程非常緊湊，而且需要付出極大努力才能掌握課程內容。因此，我們強烈建議你出席所有課程活動。請注意，課程證書僅在通過科目評估並參加7天或以上的情況下才會發放。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_3")}</h2>
            <QuestionBox
                lang={lng}
                question={["How do I know my application is successfully submitted?", "我怎麼知道我的申請已成功提交？"]}
                answer={[<span  key="0">You should receive a confirmation email listing the course(s) you applied if your online application has been successfully submitted. If you have not received a confirmation email, please contact us by <a href="mailto:epymt.math@cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt.math@cuhk.edu.hk</a> immediately.</span>
                    , <span  key="1">如果您的網上申請已成功提交，您應該會收到一封確認電子郵件，列出您所申請的課程。如果您沒有收到確認電子郵件，請立即通過 <a href="mailto:epymt.math@cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt.math@cuhk.edu.hk</a> 與我們聯繫。</span>
                ]} />
            <QuestionBox
                lang={lng}
                question={["How will the information I submit online be used?", "我在線提交的信息將如何使用？"]}
                answer={["The information collected in the application form will be used for processing, administration, and statistical purposes. We will not share your personal information with any third party.", "在申請表中收集的信息將用於處理、管理和統計目的。我們不會與任何第三方共享你的個人信息。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_4")}</h2>
            <QuestionBox
                lang={lng}
                question={["What language will the Admission Screening Test paper be in?", "入學試將以甚麼語言進行？"]}
                answer={["The Admission Screening Test paper is written in English, and you are expect to write your answers in English.", "入學試卷是用英文編寫的，你亦需以英文作答。"]}
            />
            <QuestionBox
                lang={lng}
                question={["How long will the Admission Screening Test paper be?", "入學試卷有多長？"]}
                answer={["The Admission Screening Test paper consists of two parts: a compulsory part and an elective part. If you apply for an elementary level course (Towards Modern Algebra, Complex Numbers and Analytic Geometry, or Introduction to Discrete Mathematics), the elective part is optional and will be considered a bonus. If you apply for an advanced level course (Towards Differential Geometry, Number Theory and Cryptography, or Understanding Non-Euclidean Geometry), you must attempt the corresponding question in the elective part, and any additional attempts will also be considered a bonus.", "入學試卷由兩部分組成：必答部分和選答部分。如果你申請初級程度課程（如《近世代數初探》、《複數與解析幾何》或《離散數學導論》），選答部分答案將被視為額外獎勵。如果你申請進階程度課程（如《數論與密碼學》、《微分幾何初探》或《非歐幾何賞析》），則必須作答選答部分中的相應問題，任何額外的嘗試也將被視為獎勵。"]}
            />
            <QuestionBox
                lang={lng}
                question={["What is the purpose of the Admission Screening Test?", "入學甄選測驗的目的是甚麼？"]}
                answer={["The Admission Screening Test is designed to evaluate your mathematical skills and ensure you possess the necessary knowledge to enroll in an EPYMT course. You are expected to complete the test independently to accurately reflect your abilities. Otherwise, you may end up in a course that is not suited to your level.", "入學試旨在評估你的數學能力，以確保你具備課程所需的知識。因此，你需要獨立完成測試，以準確反映你的能力。否則，你可能修讀了不適合你的課程。"]}
            />
            <QuestionBox
                lang={lng}
                question={["How can I know if my application is successful or not?", "我怎麼知道我的申請是否成功？"]}
                answer={["You will receive an email notification from us within two weeks after the Admission Screening Test. If you do not receive a notification, please consider your application unsuccessful.", "你將在入學試後的兩週內收到電郵通知。否則，很抱歉，你的申請並未成功。"]}
            />
        </div>
    );
};