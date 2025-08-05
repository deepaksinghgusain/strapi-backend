import type { Attribute, Schema } from '@strapi/strapi';

export interface BlocksApiSection extends Schema.Component {
  collectionName: 'components_blocks_api_sections';
  info: {
    description: '';
    displayName: 'ApiSection';
    icon: 'bars';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
    Index: Attribute.Enumeration<
      [
        'Home>Courses',
        'Home>Instructor',
        'Catalogue>Courses',
        'Catalogue>Packages',
        'Catalogue>Instructors',
        'Instructor>Instructors',
        'Course>Courses',
        'SelfStudy>Events',
        'SelfStudy>Instructors',
        'SelfStudy>Exam',
        'Dashboard>Taxbytes',
        'Exam>Overview'
      ]
    > &
      Attribute.Required;
    search: Attribute.Component<'shared.search'>;
    title: Attribute.Text;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    description: '';
    displayName: 'faq';
    icon: 'question';
  };
  attributes: {
    faq: Attribute.Component<'shared.question-answer', true>;
    title: Attribute.String;
  };
}

export interface BlocksFeatureImageBulletList extends Schema.Component {
  collectionName: 'components_blocks_feature_img_bullet_l';
  info: {
    description: '';
    displayName: 'HowDoesItWork';
    icon: 'adjust';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
    features: Attribute.Component<'shared.bullet2-line-text', true>;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksFeatureTextonly extends Schema.Component {
  collectionName: 'components_blocks_feature_textonly_s';
  info: {
    description: '';
    displayName: 'WhatYouGet';
    icon: 'calendar-alt';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
    features: Attribute.Component<'shared.feature-item', true>;
    subtitle: Attribute.Text;
    title: Attribute.String;
  };
}

export interface BlocksHeroImageWithButton extends Schema.Component {
  collectionName: 'components_blocks_hero_image_with_buttons';
  info: {
    description: '';
    displayName: 'HeroImageWithButton';
    icon: 'align-justify';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images'>;
    button: Attribute.Component<'shared.button', true>;
    purchaseTerms: Attribute.Text;
    title: Attribute.Text;
  };
}

export interface BlocksHeroImageWithTitles extends Schema.Component {
  collectionName: 'components_blocks_hero_image_with_titles';
  info: {
    description: '';
    displayName: 'HeroImageWithTitles';
    icon: 'align-justify';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images'>;
    button: Attribute.Component<'shared.button', true>;
    subTitle: Attribute.Text;
    title: Attribute.Text;
  };
}

export interface BlocksHeroImageWithTitlesSubtitle extends Schema.Component {
  collectionName: 'components_blocks_hero_image_with_titles_subtitles';
  info: {
    displayName: 'HeroImageWithTitlesSubtitle';
  };
  attributes: {
    background: Attribute.Media<'images'>;
    description: Attribute.Text;
    subTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface BlocksHeroSimple extends Schema.Component {
  collectionName: 'components_blocks_hero_simple_s';
  info: {
    description: '';
    displayName: 'Hero(SimpleWithVideo)';
    icon: 'calendar-week';
  };
  attributes: {
    background: Attribute.Media<'images'>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
    videoDetail: Attribute.Component<'shared.video-section'> &
      Attribute.Required;
  };
}

export interface BlocksHeroSimpleWithImage extends Schema.Component {
  collectionName: 'components_blocks_hero_simple_with_image_s';
  info: {
    description: '';
    displayName: 'Hero (SimpleWithImage)';
    icon: 'atlas';
  };
  attributes: {
    background: Attribute.Media<'images'> & Attribute.Required;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksHeroWithSocialLinks extends Schema.Component {
  collectionName: 'components_blocks_hero_with_social_links';
  info: {
    description: '';
    displayName: 'Hero WithSocialLinks';
    icon: 'award';
  };
  attributes: {
    background: Attribute.Media<'images'> & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    video: Attribute.Component<'shared.video-section'>;
  };
}

export interface BlocksLatestNews extends Schema.Component {
  collectionName: 'components_blocks_latest_news';
  info: {
    displayName: 'latestNews';
  };
  attributes: {
    newsItem: Attribute.Component<'shared.news-item', true>;
    title: Attribute.Text;
  };
}

export interface BlocksPageHighlightSimple extends Schema.Component {
  collectionName: 'components_blocks_page_highlight_simple_s';
  info: {
    description: '';
    displayName: 'Highlight(Simple)';
    icon: 'archway';
  };
  attributes: {
    description: Attribute.Text;
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksPageHighlightWithImage extends Schema.Component {
  collectionName: 'components_blocks_page_highlight_w_img';
  info: {
    description: '';
    displayName: 'Highlight(WImage)';
    icon: 'ankh';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
    description: Attribute.RichText;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksPageHighlightWithImageBulletedText
  extends Schema.Component {
  collectionName: 'components_blocks_page_highlight_w_img_bt';
  info: {
    description: '';
    displayName: 'OurValues';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'>;
    lines: Attribute.Component<'shared.bullet-text', true>;
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksPageQuestionSection extends Schema.Component {
  collectionName: 'components_blocks_page_question_sections';
  info: {
    description: '';
    displayName: 'PageQuestionSection';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
    image: Attribute.Media<'images'>;
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksPartnerSection extends Schema.Component {
  collectionName: 'components_blocks_partner_sections';
  info: {
    description: '';
    displayName: 'partnerSection';
    icon: 'certificate';
  };
  attributes: {
    partners: Attribute.Component<'shared.partner-item', true>;
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksRecommendationCard extends Schema.Component {
  collectionName: 'components_blocks_recommendation_cards';
  info: {
    description: '';
    displayName: 'RecommendationCard';
    icon: 'address-card';
  };
  attributes: {
    recommendationItems: Attribute.Component<'shared.text-item', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksStaticSection extends Schema.Component {
  collectionName: 'components_blocks_static_sections';
  info: {
    displayName: 'StaticSection';
    icon: 'comment-alt';
  };
  attributes: {
    staticText: Attribute.RichText;
  };
}

export interface BlocksTabWithButton extends Schema.Component {
  collectionName: 'components_blocks_tab_with_buttons';
  info: {
    displayName: 'TabWithButton';
    icon: 'adjust';
  };
  attributes: {
    Button: Attribute.Component<'shared.button'>;
    sectionDescription: Attribute.String;
    sectionTitle: Attribute.String;
  };
}

export interface BlocksTestimonial extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
    icon: 'air-freshener';
  };
  attributes: {
    items: Attribute.Component<'shared.testimonial', true>;
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface CartCart extends Schema.Component {
  collectionName: 'components_cart_carts';
  info: {
    description: '';
    displayName: 'CartItems';
    icon: 'cart-plus';
  };
  attributes: {
    courseId: Attribute.Integer;
    Enrollment: Attribute.Component<'cart.enrollements', true>;
    packageId: Attribute.Integer;
    qty: Attribute.Integer;
  };
}

export interface CartEnrollements extends Schema.Component {
  collectionName: 'components_cart_enrollements';
  info: {
    description: '';
    displayName: 'Enrollements';
    icon: 'calendar-plus';
  };
  attributes: {
    courseId: Attribute.Integer;
    email: Attribute.Email;
    lastname: Attribute.String;
    name: Attribute.String;
    packageId: Attribute.Integer;
    ptin: Attribute.String;
  };
}

export interface GlobalEmailTemplates extends Schema.Component {
  collectionName: 'components_global_email_templates';
  info: {
    description: '';
    displayName: 'EmailTemplates';
    icon: 'align-justify';
  };
  attributes: {
    subject: Attribute.Text & Attribute.Required;
    template: Attribute.Media<'images' | 'files'>;
    templateName: Attribute.String;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'align-right';
  };
  attributes: {
    FooterLinks: Attribute.Component<'global.footer-links'>;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    offices: Attribute.Component<'shared.footer-office', true>;
    title: Attribute.String;
  };
}

export interface GlobalFooterLinks extends Schema.Component {
  collectionName: 'components_global_footer_links';
  info: {
    description: '';
    displayName: 'footerLinks';
    icon: 'align-justify';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    title: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'navigation';
    icon: 'memory';
  };
  attributes: {
    navLinks: Attribute.Component<'shared.link', true>;
  };
}

export interface OrderOrderItems extends Schema.Component {
  collectionName: 'components_order_order_items';
  info: {
    description: '';
    displayName: 'OrderItems';
    icon: 'arrow-circle-up';
  };
  attributes: {
    category: Attribute.String;
    courseId: Attribute.Integer & Attribute.Required;
    Enrolls: Attribute.Component<'cart.enrollements', true>;
    finalPrice: Attribute.Float;
    imageUrl: Attribute.Text;
    packageId: Attribute.Integer & Attribute.Required;
    price: Attribute.BigInteger;
    qty: Attribute.Integer & Attribute.Required;
    title: Attribute.String;
  };
}

export interface SharedBulletText extends Schema.Component {
  collectionName: 'components_shared_bullet_texts';
  info: {
    description: '';
    displayName: 'bulletText';
  };
  attributes: {
    item: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedBullet2LineText extends Schema.Component {
  collectionName: 'components_shared_bullet2_line_texts';
  info: {
    displayName: 'bullet2LineText';
    icon: 'calculator';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'external-link-square-alt';
  };
  attributes: {
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedDynamic extends Schema.Component {
  collectionName: 'components_shared_dynamics';
  info: {
    displayName: 'dynamic';
    icon: 'apple-alt';
  };
  attributes: {};
}

export interface SharedDynamicTab extends Schema.Component {
  collectionName: 'components_shared_dynamic_tabs';
  info: {
    description: '';
    displayName: 'dynamicTab';
  };
  attributes: {
    content: Attribute.RichText;
    featureTitle: Attribute.RichText;
    image: Attribute.Media<'images'>;
    index: Attribute.Enumeration<
      ['Outline', 'Credits', 'GivingBack', 'Other']
    > &
      Attribute.DefaultTo<'Other'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedExamQuestion extends Schema.Component {
  collectionName: 'components_shared_exam_questions';
  info: {
    description: '';
    displayName: 'ExamQuestion';
    icon: 'question';
  };
  attributes: {
    displayOrder: Attribute.Integer;
    durationInminute: Attribute.Time;
    isMCQ: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    options: Attribute.Component<'shared.question-option', true> &
      Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    srNo: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedFeatureItem extends Schema.Component {
  collectionName: 'components_shared_feature_items';
  info: {
    displayName: 'FeatureItem';
    icon: 'ad';
  };
  attributes: {
    index: Attribute.String;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedFooterColumns extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    description: '';
    displayName: 'footerColumns';
    icon: 'align-justify';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedFooterOffice extends Schema.Component {
  collectionName: 'components_shared_footer_office_s';
  info: {
    description: '';
    displayName: 'footer(Office)';
    icon: 'business-time';
  };
  attributes: {
    address: Attribute.Text & Attribute.Required;
    contact: Attribute.String;
    email: Attribute.Email & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    description: '';
    displayName: 'header';
    icon: 'heading';
  };
  attributes: {
    label: Attribute.String;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    title: Attribute.String;
  };
}

export interface SharedIconButton extends Schema.Component {
  collectionName: 'components_shared_icon_button_s';
  info: {
    displayName: 'iconButton ';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'backward';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedMuxExamQuestion extends Schema.Component {
  collectionName: 'components_shared_mux_exam_questions';
  info: {
    description: '';
    displayName: 'MuxExamQuestion';
  };
  attributes: {
    displayOrder: Attribute.Integer;
    hint: Attribute.String;
    isMCQ: Attribute.Boolean & Attribute.Required;
    minute: Attribute.Time;
    options: Attribute.Component<'shared.mux-question-options', true>;
    srNo: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedMuxQuestionOptions extends Schema.Component {
  collectionName: 'components_shared_mux_question_options';
  info: {
    displayName: 'MuxQuestionOptions';
  };
  attributes: {
    displayOrder: Attribute.Integer;
    isAnswer: Attribute.Boolean;
    option: Attribute.String & Attribute.Required;
    srNo: Attribute.String & Attribute.Required;
  };
}

export interface SharedNewsItem extends Schema.Component {
  collectionName: 'components_shared_news_items';
  info: {
    displayName: 'NewsItem';
    icon: 'align-justify';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    logo: Attribute.Media<'images'>;
    newsLink: Attribute.Component<'shared.link'>;
  };
}

export interface SharedPartnerItem extends Schema.Component {
  collectionName: 'components_shared_partner_items';
  info: {
    description: '';
    displayName: 'partnerItem';
    icon: 'angry';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
  };
}

export interface SharedQuestionAnswer extends Schema.Component {
  collectionName: 'components_shared_question_answers';
  info: {
    description: '';
    displayName: 'questionAnswer';
    icon: 'question-circle';
  };
  attributes: {
    answer: Attribute.RichText;
    question: Attribute.String;
  };
}

export interface SharedQuestionOption extends Schema.Component {
  collectionName: 'components_shared_question_options';
  info: {
    description: '';
    displayName: 'QuestionOption';
    icon: 'angle-right';
  };
  attributes: {
    displayOrder: Attribute.Integer;
    hint: Attribute.Text;
    isAnswer: Attribute.Boolean & Attribute.DefaultTo<false>;
    option: Attribute.String & Attribute.Required;
    srNo: Attribute.String & Attribute.Required;
  };
}

export interface SharedSearch extends Schema.Component {
  collectionName: 'components_shared_search_s';
  info: {
    description: '';
    displayName: 'Search ';
  };
  attributes: {
    href: Attribute.String;
    icon: Attribute.Media<'images'> & Attribute.Private;
    isExternal: Attribute.Boolean;
    target: Attribute.Enumeration<['_blank']>;
    title: Attribute.Text;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.Required;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

export interface SharedSocialNetworks extends Schema.Component {
  collectionName: 'components_shared_social_network';
  info: {
    description: '';
    displayName: 'socialNetwork';
    icon: 'network-wired';
  };
  attributes: {
    iconImage: Attribute.Media<'images'>;
    network: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']
    >;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedTestimonial extends Schema.Component {
  collectionName: 'components_shared_testimonials';
  info: {
    description: '';
    displayName: 'TestimonialItem';
    icon: 'asterisk';
  };
  attributes: {
    rating: Attribute.Enumeration<['one', 'two', 'three', 'four', 'five']> &
      Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedTextItem extends Schema.Component {
  collectionName: 'components_shared_text_items';
  info: {
    description: '';
    displayName: 'TextItem';
    icon: 'align-justify';
  };
  attributes: {
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedTextWithLinks extends Schema.Component {
  collectionName: 'components_shared_text_with_links';
  info: {
    description: '';
    displayName: 'TextWithLinks';
    icon: 'align-left';
  };
  attributes: {
    socialLinks: Attribute.Component<'shared.social-networks', true>;
    subtitle: Attribute.Text;
    title: Attribute.Text;
  };
}

export interface SharedVideoSection extends Schema.Component {
  collectionName: 'components_shared_video_sections';
  info: {
    description: '';
    displayName: 'VideoSection';
    icon: 'video';
  };
  attributes: {
    video: Attribute.Media<'videos'>;
    videoText: Attribute.String;
    videourl: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.api-section': BlocksApiSection;
      'blocks.faq': BlocksFaq;
      'blocks.feature-image-bullet-list': BlocksFeatureImageBulletList;
      'blocks.feature-textonly': BlocksFeatureTextonly;
      'blocks.hero-image-with-button': BlocksHeroImageWithButton;
      'blocks.hero-image-with-titles': BlocksHeroImageWithTitles;
      'blocks.hero-image-with-titles-subtitle': BlocksHeroImageWithTitlesSubtitle;
      'blocks.hero-simple': BlocksHeroSimple;
      'blocks.hero-simple-with-image': BlocksHeroSimpleWithImage;
      'blocks.hero-with-social-links': BlocksHeroWithSocialLinks;
      'blocks.latest-news': BlocksLatestNews;
      'blocks.page-highlight-simple': BlocksPageHighlightSimple;
      'blocks.page-highlight-with-image': BlocksPageHighlightWithImage;
      'blocks.page-highlight-with-image-bulleted-text': BlocksPageHighlightWithImageBulletedText;
      'blocks.page-question-section': BlocksPageQuestionSection;
      'blocks.partner-section': BlocksPartnerSection;
      'blocks.recommendation-card': BlocksRecommendationCard;
      'blocks.static-section': BlocksStaticSection;
      'blocks.tab-with-button': BlocksTabWithButton;
      'blocks.testimonial': BlocksTestimonial;
      'cart.cart': CartCart;
      'cart.enrollements': CartEnrollements;
      'global.email-templates': GlobalEmailTemplates;
      'global.footer': GlobalFooter;
      'global.footer-links': GlobalFooterLinks;
      'global.navigation': GlobalNavigation;
      'order.order-items': OrderOrderItems;
      'shared.bullet-text': SharedBulletText;
      'shared.bullet2-line-text': SharedBullet2LineText;
      'shared.button': SharedButton;
      'shared.dynamic': SharedDynamic;
      'shared.dynamic-tab': SharedDynamicTab;
      'shared.exam-question': SharedExamQuestion;
      'shared.feature-item': SharedFeatureItem;
      'shared.footer-columns': SharedFooterColumns;
      'shared.footer-office': SharedFooterOffice;
      'shared.header': SharedHeader;
      'shared.icon-button': SharedIconButton;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.mux-exam-question': SharedMuxExamQuestion;
      'shared.mux-question-options': SharedMuxQuestionOptions;
      'shared.news-item': SharedNewsItem;
      'shared.partner-item': SharedPartnerItem;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.question-option': SharedQuestionOption;
      'shared.search': SharedSearch;
      'shared.seo': SharedSeo;
      'shared.social-networks': SharedSocialNetworks;
      'shared.testimonial': SharedTestimonial;
      'shared.text-item': SharedTextItem;
      'shared.text-with-links': SharedTextWithLinks;
      'shared.video-section': SharedVideoSection;
    }
  }
}
