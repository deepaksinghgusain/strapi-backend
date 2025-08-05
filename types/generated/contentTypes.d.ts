import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiCartCart extends Schema.CollectionType {
  collectionName: 'carts';
  info: {
    description: '';
    displayName: 'Cart';
    pluralName: 'carts';
    singularName: 'cart';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CartItem: Attribute.Component<'cart.cart', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    discountCode: Attribute.String;
    discountPrice: Attribute.Decimal;
    finalPrice: Attribute.Decimal;
    publishedAt: Attribute.DateTime;
    total: Attribute.Decimal;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    userId: Attribute.Integer;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    description: '';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    courses: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    faqs: Attribute.Component<'blocks.faq'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >;
    packages: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::package.package'
    >;
    publishedAt: Attribute.DateTime;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactUsContactUs extends Schema.CollectionType {
  collectionName: 'contact_uses';
  info: {
    description: '';
    displayName: 'ContactUs';
    pluralName: 'contact-uses';
    singularName: 'contact-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-us.contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email & Attribute.Required;
    firstName: Attribute.String & Attribute.Required;
    lastName: Attribute.String;
    message: Attribute.Text & Attribute.Required;
    phoneNumber: Attribute.Text;
    publishedAt: Attribute.DateTime;
    qType: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::contact-us.contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseCourse extends Schema.CollectionType {
  collectionName: 'courses';
  info: {
    description: '';
    displayName: 'Course';
    pluralName: 'courses';
    singularName: 'course';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.Relation<
      'api::course.course',
      'manyToOne',
      'api::category.category'
    >;
    certificateTemplate: Attribute.Media<'files'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    credit: Attribute.String;
    creditsInfo: Attribute.String;
    discount: Attribute.String;
    duration: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    durationUnit: Attribute.Enumeration<['Hours', 'Minutes', 'Days']> &
      Attribute.DefaultTo<'Hours'>;
    endDate: Attribute.DateTime;
    fieldOfStudy: Attribute.String;
    forTaxLaw: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    handout: Attribute.Media<'files', true>;
    image: Attribute.Media<'images'> & Attribute.Required;
    instructors: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::instructor.instructor'
    >;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    keywords: Attribute.String;
    medium: Attribute.String;
    order: Attribute.BigInteger;
    packages: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::package.package'
    >;
    price: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    programNumber: Attribute.String;
    publishedAt: Attribute.DateTime;
    redirection_Link: Attribute.String;
    shortDesc: Attribute.RichText & Attribute.Required;
    slug: Attribute.Text;
    startDate: Attribute.DateTime;
    surveyLink: Attribute.String;
    tabs: Attribute.Component<'shared.dynamic-tab', true>;
    timezone: Attribute.String;
    title: Attribute.Text & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user_courses: Attribute.Relation<
      'api::course.course',
      'oneToMany',
      'api::user-course.user-course'
    >;
    user_exams: Attribute.Relation<
      'api::course.course',
      'oneToMany',
      'api::user-exam.user-exam'
    >;
    uuid: Attribute.UID & Attribute.Private;
    venueLocation: Attribute.String;
    videoUrl: Attribute.String;
    webinarId: Attribute.String;
  };
}

export interface ApiDiscountCouponDiscountCoupon extends Schema.CollectionType {
  collectionName: 'discount_coupons';
  info: {
    description: '';
    displayName: 'DiscountCoupon';
    pluralName: 'discount-coupons';
    singularName: 'discount-coupon';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    amountOffValue: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    couponName: Attribute.String & Attribute.Required;
    couponType: Attribute.Enumeration<['amountOff', 'percentOff']> &
      Attribute.Required &
      Attribute.DefaultTo<'amountOff'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::discount-coupon.discount-coupon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    duration: Attribute.Enumeration<['month', 'forever']> &
      Attribute.Required &
      Attribute.DefaultTo<'forever'>;
    durationInMonth: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 12;
          min: 0;
        },
        number
      >;
    noOfRedemption: Attribute.Integer &
      Attribute.Private &
      Attribute.DefaultTo<0>;
    percentOffValue: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::discount-coupon.discount-coupon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmailUsEmailUs extends Schema.CollectionType {
  collectionName: 'email_uses';
  info: {
    displayName: 'EmailUs';
    pluralName: 'email-uses';
    singularName: 'email-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::email-us.email-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    header: Attribute.Component<'blocks.hero-image-with-button'>;
    publishedAt: Attribute.DateTime;
    subBackgroundImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::email-us.email-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExamExam extends Schema.CollectionType {
  collectionName: 'exams';
  info: {
    description: '';
    displayName: 'Exam';
    pluralName: 'exams';
    singularName: 'exam';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course: Attribute.Relation<
      'api::exam.exam',
      'oneToOne',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::exam.exam', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    desc: Attribute.String;
    publishedAt: Attribute.DateTime;
    questions: Attribute.Component<'shared.exam-question', true>;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::exam.exam', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    user_exams: Attribute.Relation<
      'api::exam.exam',
      'oneToMany',
      'api::user-exam.user-exam'
    >;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    description: '';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    EmailTemplates: Attribute.Component<'global.email-templates', true>;
    examPassPercentage: Attribute.Float & Attribute.DefaultTo<70>;
    footer: Attribute.Component<'global.footer'>;
    gtmPassword: Attribute.String & Attribute.Required;
    headerLogo: Attribute.Media<'images'>;
    homeLink: Attribute.Component<'shared.link'>;
    invoiceTemplate: Attribute.Media<'files'>;
    navigation: Attribute.Component<'global.navigation'>;
    notificationEmail: Attribute.String;
    publishedAt: Attribute.DateTime;
    socialLinks: Attribute.Component<'shared.social-networks', true>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    description: '';
    displayName: 'Homepage';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blocks: Attribute.DynamicZone<
      [
        'blocks.api-section',
        'blocks.faq',
        'blocks.feature-image-bullet-list',
        'blocks.feature-textonly',
        'blocks.hero-image-with-button',
        'blocks.hero-simple',
        'blocks.hero-simple-with-image',
        'blocks.hero-with-social-links',
        'blocks.latest-news',
        'blocks.page-highlight-simple',
        'blocks.page-highlight-with-image',
        'blocks.page-highlight-with-image-bulleted-text',
        'blocks.page-question-section',
        'blocks.partner-section',
        'blocks.recommendation-card',
        'blocks.static-section',
        'blocks.testimonial'
      ]
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    RssFeedUrl: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInstructorInstructor extends Schema.CollectionType {
  collectionName: 'instructors';
  info: {
    description: '';
    displayName: 'Instructor';
    pluralName: 'instructors';
    singularName: 'instructor';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bioData: Attribute.RichText;
    courses: Attribute.Relation<
      'api::instructor.instructor',
      'manyToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::instructor.instructor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.String & Attribute.Required;
    firstName: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    IsActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    lastName: Attribute.String;
    publishedAt: Attribute.DateTime;
    shortDesc: Attribute.Text & Attribute.Required;
    topics: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::instructor.instructor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLogLog extends Schema.CollectionType {
  collectionName: 'logs';
  info: {
    description: '';
    displayName: 'log';
    pluralName: 'logs';
    singularName: 'log';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::log.log', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email;
    gtagData: Attribute.JSON;
    orderId: Attribute.BigInteger;
    publishedAt: Attribute.DateTime;
    purchaseDate: Attribute.DateTime;
    status: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::log.log', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    userId: Attribute.BigInteger;
  };
}

export interface ApiOrderOrder extends Schema.CollectionType {
  collectionName: 'orders';
  info: {
    description: '';
    displayName: 'Orders';
    pluralName: 'orders';
    singularName: 'order';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    discountCode: Attribute.String;
    discountPrice: Attribute.Decimal;
    discountType: Attribute.String;
    email: Attribute.Email;
    finalPrice: Attribute.Decimal;
    OrderItems: Attribute.Component<'order.order-items', true>;
    orderStatus: Attribute.String;
    publishedAt: Attribute.DateTime;
    purchased_courses: Attribute.Relation<
      'api::order.order',
      'oneToMany',
      'api::purchased-course.purchased-course'
    >;
    receiptUrl: Attribute.String;
    stripeOrderId: Attribute.String;
    stripeSessionId: Attribute.String;
    totalPrice: Attribute.Decimal;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    userId: Attribute.Integer & Attribute.Required;
    userName: Attribute.String;
  };
}

export interface ApiPackagePackage extends Schema.CollectionType {
  collectionName: 'packages';
  info: {
    description: '';
    displayName: 'Package';
    pluralName: 'packages';
    singularName: 'package';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.Relation<
      'api::package.package',
      'manyToOne',
      'api::category.category'
    >;
    courses: Attribute.Relation<
      'api::package.package',
      'manyToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    desc: Attribute.String;
    discountedPrice: Attribute.Decimal;
    faqs: Attribute.Component<'blocks.faq'>;
    image: Attribute.Media<'images'> & Attribute.Required;
    outline: Attribute.RichText;
    price: Attribute.Decimal;
    publishedAt: Attribute.DateTime;
    purchased_courses: Attribute.Relation<
      'api::package.package',
      'oneToMany',
      'api::purchased-course.purchased-course'
    >;
    slug: Attribute.Text;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    description: '';
    displayName: 'Page';
    pluralName: 'pages';
    singularName: 'page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blocks: Attribute.DynamicZone<
      [
        'blocks.api-section',
        'blocks.faq',
        'blocks.feature-image-bullet-list',
        'blocks.feature-textonly',
        'blocks.hero-image-with-button',
        'blocks.hero-image-with-titles',
        'blocks.hero-simple-with-image',
        'blocks.hero-simple',
        'blocks.hero-with-social-links',
        'blocks.latest-news',
        'blocks.page-highlight-simple',
        'blocks.page-highlight-with-image-bulleted-text',
        'blocks.page-highlight-with-image',
        'blocks.page-question-section',
        'blocks.partner-section',
        'blocks.recommendation-card',
        'blocks.static-section',
        'blocks.testimonial',
        'blocks.tab-with-button',
        'blocks.hero-image-with-titles-subtitle'
      ]
    >;
    BlogLink: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.String;
    title: Attribute.Text & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPurchasedCoursePurchasedCourse
  extends Schema.CollectionType {
  collectionName: 'purchased_courses';
  info: {
    description: '';
    displayName: 'purchasedCourse';
    pluralName: 'purchased-courses';
    singularName: 'purchased-course';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amount: Attribute.Float;
    amountDiscounted: Attribute.Float;
    amountNet: Attribute.Float;
    category: Attribute.Relation<
      'api::purchased-course.purchased-course',
      'oneToOne',
      'api::category.category'
    >;
    certificateStatus: Attribute.Enumeration<['Granted', 'Not Granted']>;
    couponType: Attribute.String;
    couponValue: Attribute.Float;
    course: Attribute.Relation<
      'api::purchased-course.purchased-course',
      'oneToOne',
      'api::course.course'
    >;
    courseEndDate: Attribute.DateTime;
    courseSessionDuration: Attribute.Float;
    courseStartDate: Attribute.DateTime;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::purchased-course.purchased-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    discountCode: Attribute.String;
    durationUnit: Attribute.String;
    faculty: Attribute.String;
    isPackage: Attribute.Boolean & Attribute.DefaultTo<false>;
    order: Attribute.Relation<
      'api::purchased-course.purchased-course',
      'manyToOne',
      'api::order.order'
    >;
    package: Attribute.Relation<
      'api::purchased-course.purchased-course',
      'manyToOne',
      'api::package.package'
    >;
    programNumber: Attribute.String;
    publishedAt: Attribute.DateTime;
    purchaseDate: Attribute.DateTime;
    purchaseTime: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::purchased-course.purchased-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::purchased-course.purchased-course',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    userEmail: Attribute.Email;
  };
}

export interface ApiReviewExamReviewExam extends Schema.CollectionType {
  collectionName: 'review_exams';
  info: {
    description: '';
    displayName: 'ReviewExam';
    pluralName: 'review-exams';
    singularName: 'review-exam';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course: Attribute.Relation<
      'api::review-exam.review-exam',
      'oneToOne',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::review-exam.review-exam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    desc: Attribute.String;
    publishedAt: Attribute.DateTime;
    questions: Attribute.Component<'shared.exam-question', true>;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::review-exam.review-exam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user_exams: Attribute.Relation<
      'api::review-exam.review-exam',
      'oneToMany',
      'api::user-exam.user-exam'
    >;
  };
}

export interface ApiSigninpageSigninpage extends Schema.SingleType {
  collectionName: 'signinpages';
  info: {
    displayName: 'Signinpage';
    pluralName: 'signinpages';
    singularName: 'signinpage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::signinpage.signinpage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    heroSection: Attribute.Component<'blocks.hero-simple-with-image'>;
    publishedAt: Attribute.DateTime;
    signinbutton: Attribute.Component<'shared.button', true>;
    signinTitle: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::signinpage.signinpage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSignupSignup extends Schema.SingleType {
  collectionName: 'signups';
  info: {
    displayName: 'Signup';
    pluralName: 'signups';
    singularName: 'signup';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    additionalTitle: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::signup.signup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    heroSection: Attribute.Component<'blocks.hero-simple-with-image'>;
    publishedAt: Attribute.DateTime;
    signupButton: Attribute.Component<'shared.button', true>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::signup.signup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStripeCouponStripeCoupon extends Schema.CollectionType {
  collectionName: 'stripe_coupons';
  info: {
    description: '';
    displayName: 'StripeCoupon';
    pluralName: 'stripe-coupons';
    singularName: 'stripe-coupon';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    amountOffValue: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    couponId: Attribute.String & Attribute.Private & Attribute.Unique;
    couponName: Attribute.String & Attribute.Required & Attribute.Unique;
    couponType: Attribute.Enumeration<['amountOff', 'percentOff']> &
      Attribute.Required &
      Attribute.DefaultTo<'amountOff'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stripe-coupon.stripe-coupon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    duration: Attribute.Enumeration<['once', 'month', 'forever']> &
      Attribute.Required &
      Attribute.DefaultTo<'forever'>;
    durationInMonth: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 12;
          min: 0;
        },
        number
      >;
    percentOffValue: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::stripe-coupon.stripe-coupon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserCardTokenUserCardToken extends Schema.CollectionType {
  collectionName: 'user_card_tokens';
  info: {
    description: '';
    displayName: 'userCardToken';
    pluralName: 'user-card-tokens';
    singularName: 'user-card-token';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-card-token.user-card-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email;
    publishedAt: Attribute.DateTime;
    stripeCardId: Attribute.String;
    stripeCardToken: Attribute.String;
    stripeCustomerId: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::user-card-token.user-card-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    userId: Attribute.Integer;
  };
}

export interface ApiUserCourseUserCourse extends Schema.CollectionType {
  collectionName: 'user_courses';
  info: {
    description: '';
    displayName: 'UserCourse';
    pluralName: 'user-courses';
    singularName: 'user-course';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    completedOn: Attribute.Date;
    course: Attribute.Relation<
      'api::user-course.user-course',
      'manyToOne',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-course.user-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    isReviewExamPassed: Attribute.Boolean & Attribute.DefaultTo<false>;
    joinUrl: Attribute.String;
    lastVideoView: Attribute.Float;
    publishedAt: Attribute.DateTime;
    purchasedOn: Attribute.DateTime;
    registrantKey: Attribute.Text;
    status: Attribute.Enumeration<['Completed', 'InProgress', 'NotStarted']>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::user-course.user-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::user-course.user-course',
      'manyToOne',
      'plugin::users-permissions.user'
    > &
      Attribute.Required;
  };
}

export interface ApiUserExamUserExam extends Schema.CollectionType {
  collectionName: 'user_exams';
  info: {
    description: '';
    displayName: 'UserExam';
    pluralName: 'user-exams';
    singularName: 'user-exam';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course: Attribute.Relation<
      'api::user-exam.user-exam',
      'manyToOne',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-exam.user-exam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    endedOn: Attribute.Date;
    exam: Attribute.Relation<
      'api::user-exam.user-exam',
      'manyToOne',
      'api::exam.exam'
    >;
    publishedAt: Attribute.DateTime;
    result: Attribute.JSON;
    review_exam: Attribute.Relation<
      'api::user-exam.user-exam',
      'manyToOne',
      'api::review-exam.review-exam'
    >;
    score: Attribute.Integer;
    startedOn: Attribute.Date;
    totalScore: Attribute.Integer;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::user-exam.user-exam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::user-exam.user-exam',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMuxVideoUploaderMuxAsset extends Schema.CollectionType {
  collectionName: 'muxassets';
  info: {
    description: 'Represents a Mux Asset item, including upload and playback details';
    displayName: 'Mux Asset';
    name: 'mux-asset';
    pluralName: 'mux-assets';
    singularName: 'mux-asset';
  };
  options: {
    increments: true;
    timestamps: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: true;
    };
  };
  attributes: {
    aspect_ratio: Attribute.String;
    asset_data: Attribute.JSON;
    asset_id: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::mux-video-uploader.mux-asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    duration: Attribute.Decimal;
    error_message: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    isReady: Attribute.Boolean & Attribute.DefaultTo<false>;
    playback_id: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    signed: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 3;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::mux-video-uploader.mux-asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    upload_id: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface PluginMuxVideoUploaderMuxTextTrack
  extends Schema.CollectionType {
  collectionName: 'muxtexttracks';
  info: {
    description: 'Temporary storage for user-defined subtitles & captions sent to Mux during video uploads';
    displayName: 'Mux Text Track';
    name: 'mux-text-track';
    pluralName: 'mux-text-tracks';
    singularName: 'mux-text-track';
  };
  options: {
    increments: true;
    timestamps: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    closed_captions: Attribute.Boolean & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::mux-video-uploader.mux-text-track',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    file: Attribute.JSON & Attribute.Required;
    language_code: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::mux-video-uploader.mux-text-track',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs';
  info: {
    displayName: 'slug';
    pluralName: 'slugs';
    singularName: 'slug';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    count: Attribute.Integer;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    slug: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    address1: Attribute.String;
    address2: Attribute.String;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    companyName: Attribute.String;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    country: Attribute.String & Attribute.Required;
    coursePurchased: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::user-course.user-course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstName: Attribute.String & Attribute.Required;
    lastLoggedIn: Attribute.DateTime;
    lastName: Attribute.String;
    middleName: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    phone: Attribute.String;
    profileImage: Attribute.Media<'images'>;
    provider: Attribute.String;
    PTIN: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    state: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user_exams: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::user-exam.user-exam'
    >;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    uuid: Attribute.UID & Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::cart.cart': ApiCartCart;
      'api::category.category': ApiCategoryCategory;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::course.course': ApiCourseCourse;
      'api::discount-coupon.discount-coupon': ApiDiscountCouponDiscountCoupon;
      'api::email-us.email-us': ApiEmailUsEmailUs;
      'api::exam.exam': ApiExamExam;
      'api::global.global': ApiGlobalGlobal;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::instructor.instructor': ApiInstructorInstructor;
      'api::log.log': ApiLogLog;
      'api::order.order': ApiOrderOrder;
      'api::package.package': ApiPackagePackage;
      'api::page.page': ApiPagePage;
      'api::purchased-course.purchased-course': ApiPurchasedCoursePurchasedCourse;
      'api::review-exam.review-exam': ApiReviewExamReviewExam;
      'api::signinpage.signinpage': ApiSigninpageSigninpage;
      'api::signup.signup': ApiSignupSignup;
      'api::stripe-coupon.stripe-coupon': ApiStripeCouponStripeCoupon;
      'api::user-card-token.user-card-token': ApiUserCardTokenUserCardToken;
      'api::user-course.user-course': ApiUserCourseUserCourse;
      'api::user-exam.user-exam': ApiUserExamUserExam;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::mux-video-uploader.mux-asset': PluginMuxVideoUploaderMuxAsset;
      'plugin::mux-video-uploader.mux-text-track': PluginMuxVideoUploaderMuxTextTrack;
      'plugin::slugify.slug': PluginSlugifySlug;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
