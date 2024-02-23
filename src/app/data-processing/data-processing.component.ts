import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params, RouterLink, RouterLinkActive} from "@angular/router";
import {map, Observable, of, switchMap} from "rxjs";
import {AsyncPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ObjectToArrayPipe} from "../../pipes/object-to-array.pipe";

interface ServiceDetail {
  id: number;
  title: string;
  description: any;
  slug: string;
  isVideo?: boolean
  videoSrc: string
}

@Component({
  selector: 'app-data-processing',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    NgIf,
    NgForOf,
    ObjectToArrayPipe,
    RouterLinkActive,
    NgClass,
    NgStyle
  ],
  templateUrl: './data-processing.component.html',
  styleUrl: './data-processing.component.css'
})
export class DataProcessingComponent implements OnInit {
  serviceDetails: ServiceDetail[] = [
    {
      "id": 1,
      "title": "Market Research",
      "description": {
        "p1": "Maintaining a competitive edge in today's fast-paced business environment necessitates a thorough comprehension of consumer preferences and market dynamics. In order to meet the unique demands of each of our clients, our firm provides thorough market research services. By means of rigorous data gathering, examination, and interpretation, we offer priceless insights that enable enterprises to take advantage of profitable prospects and make well-informed decisions.",
        "p2": "Our committed team uses a wide range of research techniques, such as data mining, trend analysis, surveys and focus groups, to make sure our clients obtain a comprehensive understanding of their target audiences. Our market research gives businesses the information they need to succeed in today's dynamic economy, whether it's for spotting new trends, measuring consumer happiness, or analyzing competition tactics. Customers may successfully navigate the intricacies of the market and achieve long-term growth by availing themselves of our services."
      },
      "slug": "market-research",
      isVideo: true,
      "videoSrc": "assets/img/market_research.mp4"
    },
    {
      "id": 2,
      "title": "Questionnaire Designing",
      "description": {
        "p1": "Developing a well-crafted questionnaire is essential to obtain practical insights and comprehending the behaviour of customers. We specialize in creating questionnaires, and we provide customized solutions to fulfill each client's specific needs. We pay close attention to every detail to guarantee that every question is well-crafted to elicit insightful responses, assisting organizations in making well-informed decisions and developing strategic plans.",
        "p2": "Our skilled research team uses cutting-edge methods and industry best practices to create questionnaires that produce precise and useful data. We use our experience to maximize survey participation and minimize bias, from question structure to response format optimisation, providing thorough insights that promote company success. Clients may confidently collect the data they require to stay ahead of the curve and surpass customer expectations by using our questionnaire design service."
      },
      "slug": "questionnaire-designing",
      isVideo: false,
      "videoSrc": "assets/img/questionnaire_designing.jpg"
    },
    {
      "id": 3,
      "title": "Survey Programming",
      "description": {
        "p1": "Efficient survey programming is essential in the digital age to collect precise and meaningful data from participants. Pabda Consulting specializes in providing survey programming services that help our clients collect data more efficiently. With our proficiency in a range of programming languages and survey platforms including Decipher, Conformit etc, we customize our solutions to fit the unique needs of every project, guaranteeing flawless performance and integration.",
        "p2": "In order to produce dynamic surveys with interactive elements and a user-friendly experience that optimizes response rates, our committed staff uses cutting-edge programming approaches. We use the newest technologies to create surveys that effectively gather thorough data, from intricate skip logic and branching paths to adaptable layouts and mobile adaptability. Our survey programming solution empowers clients to effectively interact with their target audience and obtain insightful data that supports strategic growth objectives and well-informed decision-making."
      },
      "slug": "survey-programming",
      isVideo: false,
      "videoSrc": "assets/img/survey_programming.jpg"
    },
    {
      "id": 4,
      "title": "Data Processing",
      "description": {
        "p1": "In the data-driven world of today, deriving actionable insights from unprocessed data is crucial to make wise decisions. Pabda Consulting assists clients in realizing the complete value of their information by providing professional data processing services. We guarantee accuracy and efficiency at every stage of the data processing pipeline—from cleaning and organizing to analyzing and visualizing—by utilizing state-of-the-art technologies and stringent quality control procedures.",
        "p2": "Our skilled staff is adept in several data processing methods, such as aggregation, normalization, and data cleaning. Whether working with big datasets or intricate data structures, we utilize cutting-edge technologies and algorithms to effectively extract relevant insights. Clients may use their data to support strategic initiatives, increase operational effectiveness, and gain a competitive edge in today's fast-paced market by collaborating with us for data processing."
      },
      "slug": "data-processing",
      isVideo: true,
      "videoSrc": "assets/img/data_processing.mp4"
    },
    {
      "id": 5,
      "title": "Industries Reach",
      "description": {
        "p1": "We are an expert in Industries Reach services, which link and form alliances between various industries. We help our clients reach new markets and take advantage of new opportunities by utilizing our wide network and industry knowledge. Through the creation of business-to-business connections, the investigation of unexplored markets, and the identification of strategic partnerships, we enable companies to extend their reach and prosper in a constantly changing worldwide environment.",
        "p2": "We offer specialized solutions that are in line with the goals and desires of our clients since we have a thorough awareness of market trends and dynamics. Our strategies and actions, which range from focused outreach efforts to market research, promote long-term success and growth. Clients can confidently navigate difficult sectors, open up new business opportunities, and establish themselves as leaders in their respective fields by utilizing our sector's Reach services."
      },
      "slug": "industries-reach",
      "isVideo": false,
      "videoSrc": "assets/img/industries_reach.jpg"
    },
    {
      "id": 6,
      "title": "Respondent Reach",
      "description": {
        "p1": "Pabda Consulting specializes in Respondent Reach services, which enable target audiences to be engaged across a range of demographics and geographic locations. We connect clients with the appropriate respondents for their research projects, surveys, or marketing initiatives through our creative approaches and strategic strategy. By utilizing a wide range of platforms and channels, we guarantee thorough coverage and quick reaction times, allowing clients to obtain insightful information and make wise decisions.",
        "p2": "We customize our Respondent Reach services to each client's specific needs and goals, emphasizing personalized communication and precise targeting. Our proficiency with audience identification and engagement tactics guarantees efficient outreach and significant engagements, regardless of the target audience—narrow markets, particular consumer categories, or worldwide audiences. Clients who work with us for Respondent Reach get access to the information and opinions needed to propel their businesses forward and accomplish their objectives."
      },
      "slug": "respondent-reach",
      isVideo: false,
      "videoSrc": "assets/img/respondent_reach.jpg"
    },
    {
      "id": 7,
      "title": "CATI",
      "description": {
        "p1": "With a focus on Computer-Assisted Telephone Interviews (CATI), our organization provides clients with a convenient way to collect important data via phone surveys. We use cutting-edge computer software in our CATI services to improve the effectiveness and precision of the interviewing process, guaranteeing high-quality data collecting. Our skilled interviewers manage call lists, conduct structured interviews, and capture replies in real-time using CATI technology, providing our clients with accurate and useful data.",
        "p2": "We allow our clients the freedom to reach a wide range of demographics and geographical areas with CATI, irrespective of technological obstacles or lack of internet connectivity. Our staff makes sure that every phone interview follows the best practices for survey methodology, all the while upholding the highest standards of discretion and professionalism. Through the use of our CATI services, clients may obtain extensive data, obtain insightful knowledge about the tastes and behaviours of their customers, and make well-informed decisions that will advance their business."
      },
      "slug": "cati",
      isVideo: false,
      "videoSrc": "assets/img/cati_detail.jpg"
    },
    {
      "id": 8,
      "title": "CAWI/Online",
      "description": {
        "p1": "We specialize in Computer-Assisted Web Interviewing (CAWI) services, providing our clients with dependable and effective online surveys. We can reach and interact with target audiences from a variety of demographic and geographic backgrounds by utilizing the internet's power with CAWI. Our easy-to-use online survey solutions facilitate smooth data gathering, letting participants submit comments safely and conveniently from PCs or mobile devices.",
        "p2": "With CAWI, companies can easily tailor surveys to their unique research goals by adding features like multimedia content, branching, and skip logic to increase respondent engagement. By following industry best practices and implementing strict quality control procedures, our skilled staff guarantees the accuracy and integrity of data that is gathered. Through the use of our CAWI services, clients can obtain timely and useful insights that enable them to drive company success in the current digital environment and make well-informed decisions."
      },
      "slug": "cawi-online",
      isVideo: false,
      "videoSrc": "assets/img/cawi_online.jpg"
    },
    {
      "id": 9,
      "title": "Face to Face",
      "description": {
        "p1": "Pabda Consulting specializes in providing excellent in-person interviewing services that are customized to each individual client's demands. We provide in-depth discussions with target audiences through tailored interactions, enabling the careful examination of beliefs, attitudes, and actions. To obtain insightful information, our trained interviewers use a mix of probing and active listening strategies, guaranteeing thorough data gathering and analysis.",
        "p2": "Our in-person interviews are carried out with integrity and empathy, maintaining a commitment to professionalism and secrecy while building rapport and trust with respondents. Whether we conduct interviews at homes of participants, retail locations, or events, we guarantee a relaxed and friendly atmosphere that encourages candid communication. Through the utilization of our in-person interview services, clients may enhance their comprehension of consumer preferences, obtain significant qualitative insights, and make well-informed judgements that propel corporate expansion and prosperity."
      },
      "slug": "face-to-face",
      isVideo: true,
      "videoSrc": "assets/img/face_to_face.mp4"
    },
    {
      "id": 10,
      "title": "In-depth Discussions",
      "description": {
        "p1": "We specialize in leading complex conversations that explore the nuances of different subjects, providing clients with insightful opinions. By means of thoughtfully organized sessions facilitated by seasoned moderators, we establish a favourable atmosphere for candid conversation and investigation. Focus groups, roundtable talks, expert panels—we customize our methodology to meet the unique goals and interests of our clients, guaranteeing insightful conversations that lead to practical conclusions.",
        "p2": "Our in-depth talks enable clients to have a deeper understanding of market trends, consumer behaviours, and industry difficulties with an emphasis on encouraging interaction and cooperation. Through our proficiency in qualitative research methodology and facilitation, customers may effectively leverage the collective wisdom of varied stakeholders, thereby stimulating innovation and providing valuable insights for strategic decision-making. By engaging in comprehensive dialogues with Pabda Consulting, clients can uncover fresh viewpoints, spot prospects, and maintain an advantage in the ever-changing business environment of today."
      },
      "slug": "in-depth-discussions",
      isVideo: true,
      "videoSrc": "assets/img/in_depth_discussions.mp4"
    }
  ]

  service$: Observable<ServiceDetail> = new Observable<ServiceDetail>();

  selectedSlug: string = 'market-research';

  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.service$ = this.route.params.pipe(
      map((params: Params) => params?.['slug']),
      switchMap((slug: string) =>
        this.getServiceDetailBySlug(slug)
      )
    );
  }

  getServiceDetailBySlug(slug: string): Observable<ServiceDetail> {
    const serviceDetail: ServiceDetail = this.serviceDetails.find((service: ServiceDetail): boolean => service.slug === slug);
    this.selectedSlug = serviceDetail?.slug;
    return serviceDetail ? of(serviceDetail) : of(null);
  }
  
  isLinkActive(slug: string): boolean {
    return this.route.snapshot.paramMap.get('slug') === slug;
  }

}
