# 人才引进系统

[TOC]



## 优秀人才引进申请表数据结构

### Page1

```json
page1 : {
    confirm : "True", //是否同意 (一个勾选框)
}
```



### Page2

```json
page2 : {
    applicant_name: "Tom", //申请人姓名
    applicant_degree: "PhD", // 申请人学位
    applicant_title: "professor", //申请人职称
    applicant_tel: "17799123487", //申请人电话
    applicant_email: "applicant@gmail.com", //申请人邮箱
    applicant_now_company: "Hainan Medical University", //申请人现工作或学习单位
    applicant_introduce_cate: "technology", //申请引进类型
    applicant_apply_date: "2018/06/08" //申请日期
}
```

###Page3
```json
page3 : {
    //基本信息
    photo: "/static/applicant@gmail.com/photo.jpg", //照片(URL)
    name: "Tom", //姓名
    sex: "male", //性别
    nation: "汉族", //民族
    nationality: "China", //国籍
    political_status: "people", //政治面貌
    date_of_birth: "1980/10/02", //出生年月
    marital_status: "married", //婚姻状况
    final_degree: "PhD", //最后学位
    degree_country: "China", //获学位国别
    degree_date: "1997/09/01", //获学位时间
    title: "professor", //职称
    working_time: "5 years", //任职时间
    now_working_company_ch: "海南医学院", //现任职或学习单位(含院系)(中文)
    now_working_company_en: "Hainan Medical University", //现任职或学习单位(含院系)(英文或所在国文)
    address: "海南省海口市学院路三号", //通信地址
    postal_code: "571400", //邮政编码
    tel: "17799123487", //手机
    home_tel: "17799123487", //家庭电话
    fax_code: "519-85129131", //传真
    e_mail: "applicant@gmail.com", //电子邮箱
    
    //主要学习经历
    bachelor_date: "1990/09/01", //本科毕业日期
    bachelor_university: "Hainan Medical University", //本科大学
    bachelor_specialty: "Computer Science", //本科专业
    
    master_date: "1993/09/01", //硕士毕业日期
    master_university: "Hainan Medical University", //硕士大学
    master_specialty: "Computer Science", //硕士专业
    master_paper: "How to spell 'Hello World'", //硕士毕业论文
    
    phd_data: "1997/09/01", //博士毕业日期
    phd_university: "Hainan Medical University", //博士毕业大学
    phd_specialty: "Computer Science", //博士专业
    phd_paper: "How to spell 'Cervical spondylosis'", //博士毕业论文
    
    one_stop_postdoctoral_date: "2001/09/09", //一站博士后出站日期
    one_stop_postdoctoral_compony: "Hainan Medical University", //一站博士后单位
    one_stop_postdoctoral_tutor: "Jerry", //一站博士后导师
    one_stop_postdoctoral_paper: "How to spell 'lumbar disc herniation'", //一站博士后出站报告题目
    
    two_stop_postdoctoral_date: "2004/09/09", //二站博士后出站日期
    two_stop_postdoctoral_compony: "Hainan Medical University", //二站博士后单位
    two_stop_postdoctoral_tutor: "Jerry", //二站博士后导师
    two_stop_postdoctoral_paper: "Who I am", //二站博士后出站报告题目
    
    //主要工作经历
    main_work_exp1_time: "2004/09/09 -- 2008/09/09", //主要工作经验1起止时间
    main_work_exp1_company: "Hainan Medical University", //主要工作经验1工作单位
    main_work_exp1_title: "professor", //主要工作经验1职称
    main_work_exp1_post: "teacher", //主要工作经验1职务
    main_work_exp1_specialty: "Computer Science", //主要工作经验1专业(方向)
    
    main_work_exp2_time: "2008/09/09 -- 2012/09/09", //主要工作经验2起止时间
    main_work_exp2_company: "Hainan Medical University", //主要工作经验2工作单位
    main_work_exp2_title: "professor", //主要工作经验2职称
    main_work_exp2_post: "teacher", //主要工作经验2职务
    main_work_exp2_specialty: "Computer Science", //主要工作经验2专业(方向)
    
    main_work_exp3_time: "2012/09/09 -- 2017/09/09", //主要工作经验3起止时间
    main_work_exp3_company: "Hainan Medical University", //主要工作经验3工作单位
    main_work_exp3_title: "professor", //主要工作经验3职称
    main_work_exp3_post: "teacher", //主要工作经验3职务
    main_work_exp3_specialty: "Computer Science" //主要工作经验3专业(方向)
}
```

### Page4

```json
page4 : {
    applicant_main_value: "Make the world better"//主要学术贡献, 重要创新成果及其科学价值或社会经济意义
}
```

### Page5

```json
page5 : {
    // 申请人近五年主要学术成就情况
    project1_name: "How to spell 'Hello'", //项目名称
    project1_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project1_funding: "$1", //项目经费
    project1_start_date: "2012/01/01", //起始日期
    project1_end_date: "2013/01/01", //终止日期
    project1_rank: "1", //排序
    
    project2_name: "How to spell 'Hello'", //项目名称
    project2_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project2_funding: "$1", //项目经费
    project2_start_date: "2012/01/01", //起始日期
    project2_end_date: "2013/01/01", //终止日期
    project2_rank: "1", //排序
    
    project3_name: "How to spell 'Hello'", //项目名称
    project3_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project3_funding: "$1", //项目经费
    project3_start_date: "2012/01/01", //起始日期
    project3_end_date: "2013/01/01", //终止日期
    project3_rank: "1", //排序
    
    project4_name: "How to spell 'Hello'", //项目名称
    project4_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project4_funding: "$1", //项目经费
    project4_start_date: "2012/01/01", //起始日期
    project4_end_date: "2013/01/01", //终止日期
    project4_rank: "1", //排序
    
    project5_name: "How to spell 'Hello'", //项目名称
    project5_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project5_funding: "$1", //项目经费
    project5_start_date: "2012/01/01", //起始日期
    project5_end_date: "2013/01/01", //终止日期
    project5_rank: "1", //排序
    
    project6_name: "How to spell 'Hello'", //项目名称
    project6_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project6_funding: "$1", //项目经费
    project6_start_date: "2012/01/01", //起始日期
    project6_end_date: "2013/01/01", //终止日期
    project6_rank: "1", //排序
    
    project7_name: "How to spell 'Hello'", //项目名称
    project7_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project7_funding: "$1", //项目经费
    project7_start_date: "2012/01/01", //起始日期
    project7_end_date: "2013/01/01", //终止日期
    project7_rank: "1", //排序
    
    project8_name: "How to spell 'Hello'", //项目名称
    project8_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project8_funding: "$1", //项目经费
    project8_start_date: "2012/01/01", //起始日期
    project8_end_date: "2013/01/01", //终止日期
    project8_rank: "1", //排序
    
    project9_name: "How to spell 'Hello'", //项目名称
    project9_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project9_funding: "$1", //项目经费
    project9_start_date: "2012/01/01", //起始日期
    project9_end_date: "2013/01/01", //终止日期
    project9_rank: "1", //排序
    
    project10_name: "How to spell 'Hello'", //项目名称
    project10_nature_and_source: "very important and comes from dreaming", //项目性质及来源
    project10_funding: "$1", //项目经费
    project10_start_date: "2012/01/01", //起始日期
    project10_end_date: "2013/01/01", //终止日期
    project10_rank: "1" //排序
}
```



### Page6

```json
page6 : {
    //近五年申请人重要科研获奖情况
    project1_name: "How to spell 'Hello'", //获奖项目名称
    project1_awarded_name: "King of eggs", //奖励名称
    project1_awarded_level: "School", //获奖等级
    project1_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project1_awarded_year: "2014", //获奖年度
    project1_rank: "1", //排名
    
    project2_name: "How to spell 'Hello'", //获奖项目名称
    project2_awarded_name: "King of eggs", //奖励名称
    project2_awarded_level: "School", //获奖等级
    project2_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project2_awarded_year: "2014", //获奖年度
    project2_rank: "1", //排名
    
    project3_name: "How to spell 'Hello'", //获奖项目名称
    project3_awarded_name: "King of eggs", //奖励名称
    project3_awarded_level: "School", //获奖等级
    project3_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project3_awarded_year: "2014", //获奖年度
    project3_rank: "1", //排名
    
    project4_name: "How to spell 'Hello'", //获奖项目名称
    project4_awarded_name: "King of eggs", //奖励名称
    project4_awarded_level: "School", //获奖等级
    project4_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project4_awarded_year: "2014", //获奖年度
    project4_rank: "1", //排名
    
    project5_name: "How to spell 'Hello'", //获奖项目名称
    project5_awarded_name: "King of eggs", //奖励名称
    project5_awarded_level: "School", //获奖等级
    project5_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project5_awarded_year: "2014", //获奖年度
    project5_rank: "1", //排名
    
    project6_name: "How to spell 'Hello'", //获奖项目名称
    project6_awarded_name: "King of eggs", //奖励名称
    project6_awarded_level: "School", //获奖等级
    project6_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project6_awarded_year: "2014", //获奖年度
    project6_rank: "1", //排名
    
    project7_name: "How to spell 'Hello'", //获奖项目名称
    project7_awarded_name: "King of eggs", //奖励名称
    project7_awarded_level: "School", //获奖等级
    project7_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project7_awarded_year: "2014", //获奖年度
    project7_rank: "1", //排名
    
    project8_name: "How to spell 'Hello'", //获奖项目名称
    project8_awarded_name: "King of eggs", //奖励名称
    project8_awarded_level: "School", //获奖等级
    project8_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project8_awarded_year: "2014", //获奖年度
    project8_rank: "1", //排名
    
    project9_name: "How to spell 'Hello'", //获奖项目名称
    project9_awarded_name: "King of eggs", //奖励名称
    project9_awarded_level: "School", //获奖等级
    project9_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project9_awarded_year: "2014", //获奖年度
    project9_rank: "1", //排名
    
    project10_name: "How to spell 'Hello'", //获奖项目名称
    project10_awarded_name: "King of eggs", //奖励名称
    project10_awarded_level: "School", //获奖等级
    project10_award_company_and_country: "Hainan Medical University of China", //授奖单位及国别
    project10_awarded_year: "2014", //获奖年度
    project10_rank: "1" //排名
}
```

### Page7

```json
page7 : {
    //近五年申请人代表性著作, 论文情况
    //期刊的影响因子已最新的数值为准
    paper1_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper1_published_date: "2014/05/08", //初版或发表时间
    paper1_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper1_impact_factor: "12", //期刊影响因子
    paper1_sci_iquote_times: "4", //SCI他引次数
    paper1_ssci_iquote_times: "5", //SSCI他引次数
    paper1_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper2_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper2_published_date: "2014/05/08", //初版或发表时间
    paper2_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper2_impact_factor: "12", //期刊影响因子
    paper2_sci_iquote_times: "4", //SCI他引次数
    paper2_ssci_iquote_times: "5", //SSCI他引次数
    paper2_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper3_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper3_published_date: "2014/05/08", //初版或发表时间
    paper3_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper3_impact_factor: "12", //期刊影响因子
    paper3_sci_iquote_times: "4", //SCI他引次数
    paper3_ssci_iquote_times: "5", //SSCI他引次数
    paper3_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper4_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper4_published_date: "2014/05/08", //初版或发表时间
    paper4_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper4_impact_factor: "12", //期刊影响因子
    paper4_sci_iquote_times: "4", //SCI他引次数
    paper4_ssci_iquote_times: "5", //SSCI他引次数
    paper4_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper5_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper5_published_date: "2014/05/08", //初版或发表时间
    paper5_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper5_impact_factor: "12", //期刊影响因子
    paper5_sci_iquote_times: "4", //SCI他引次数
    paper5_ssci_iquote_times: "5", //SSCI他引次数
    paper5_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper6_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper6_published_date: "2014/05/08", //初版或发表时间
    paper6_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper6_impact_factor: "12", //期刊影响因子
    paper6_sci_iquote_times: "4", //SCI他引次数
    paper6_ssci_iquote_times: "5", //SSCI他引次数
    paper6_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper7_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper7_published_date: "2014/05/08", //初版或发表时间
    paper7_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper7_impact_factor: "12", //期刊影响因子
    paper7_sci_iquote_times: "4", //SCI他引次数
    paper7_ssci_iquote_times: "5", //SSCI他引次数
    paper7_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper8_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper8_published_date: "2014/05/08", //初版或发表时间
    paper8_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper8_impact_factor: "12", //期刊影响因子
    paper8_sci_iquote_times: "4", //SCI他引次数
    paper8_ssci_iquote_times: "5", //SSCI他引次数
    paper8_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper9_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper9_published_date: "2014/05/08", //初版或发表时间
    paper9_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper9_impact_factor: "12", //期刊影响因子
    paper9_sci_iquote_times: "4", //SCI他引次数
    paper9_ssci_iquote_times: "5", //SSCI他引次数
    paper9_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper10_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper10_published_date: "2014/05/08", //初版或发表时间
    paper10_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper10_impact_factor: "12", //期刊影响因子
    paper10_sci_iquote_times: "4", //SCI他引次数
    paper10_ssci_iquote_times: "5", //SSCI他引次数
    paper10_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper11_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper11_published_date: "2014/05/08", //初版或发表时间
    paper11_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper11_impact_factor: "12", //期刊影响因子
    paper11_sci_iquote_times: "4", //SCI他引次数
    paper11_ssci_iquote_times: "5", //SSCI他引次数
    paper11_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper12_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper12_published_date: "2014/05/08", //初版或发表时间
    paper12_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper12_impact_factor: "12", //期刊影响因子
    paper12_sci_iquote_times: "4", //SCI他引次数
    paper12_ssci_iquote_times: "5", //SSCI他引次数
    paper12_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper13_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper13_published_date: "2014/05/08", //初版或发表时间
    paper13_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper13_impact_factor: "12", //期刊影响因子
    paper13_sci_iquote_times: "4", //SCI他引次数
    paper13_ssci_iquote_times: "5", //SSCI他引次数
    paper13_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper14_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper14_published_date: "2014/05/08", //初版或发表时间
    paper14_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper14_impact_factor: "12", //期刊影响因子
    paper14_sci_iquote_times: "4", //SCI他引次数
    paper14_ssci_iquote_times: "5", //SSCI他引次数
    paper14_cssci_iquote_times: "6", //CSSCI他引次数
    
    paper15_name: "S. HORVATH, DNA METHYLATION AGE OF HUMAN TISSUES AND CELL TYPES. GENOME BIOL 14, R115 (2013).", //著作论文名称; 初版单位或发表刊物名称; 期号, 起止页码; 所有著, 作者姓名(通讯作者标注*号)
    paper15_published_date: "2014/05/08", //初版或发表时间
    paper15_is_included: "yes", //是否被SCI, EI, SSCI, CSSCI收录
    paper15_impact_factor: "12", //期刊影响因子
    paper15_sci_iquote_times: "4", //SCI他引次数
    paper15_ssci_iquote_times: "5", //SSCI他引次数
    paper15_cssci_iquote_times: "6" //CSSCI他引次数
}
```

### Page8

```json
page8 : {
    //近五年申请人和获奖权专利情况
    patented_number: 5, //已授权专利数, 不超过10项
    
    patented1_name: "a name", //专利名称
    patented1_country: "China", //专利授权国
    patented1_number: "200210000001.1", //专利号
    patented1_date: "2013/03/12", //授权公告日
    patented1_rank: "1", //排序
    
    patented2_name: "a name", //专利名称
    patented2_country: "China", //专利授权国
    patented2_number: "200210000001.1", //专利号
    patented2_date: "2013/03/12", //授权公告日
    patented2_rank: "1", //排序
    
    patented3_name: "a name", //专利名称
    patented3_country: "Chi", //专利授权国
    patented3_number: "200210000001.1", //专利号
    patented3_date: "2013/03/12", //授权公告日
    patented3_rank: "1", //排序
    
    patented4_name: "a name", //专利名称
    patented4_country: "China", //专利授权国
    patented4_number: "200210000001.1", //专利号
    patented4_date: "2013/03/12", //授权公告日
    patented4_rank: "1", //排序
    
    patented5_name: "a name", //专利名称
    patented5_country: "China", //专利授权国
    patented5_number: "200210000001.1", //专利号
    patented5_date: "2013/03/12", //授权公告日
    patented5_rank: "1", //排序
    
    unpatented_number: 3, //未授权专利, 不超过5项
    
    unpatented1_name: "a name", //专利名称
    unpatented1_country: "China", //专利申请国
    unpatented1_apply_number: "0000001", //申请号
    unpatented1_apply_date: "2016/03/23", //专利申请日
    unpatented1_rank: "1", //排序
    
    unpatented2_name: "a name", //专利名称
    unpatented2_country: "China", //专利申请国
    unpatented2_apply_number: "0000001", //申请号
    unpatented2_apply_date: "2016/03/23", //专利申请日
    unpatented2_rank: "1", //排序
    
    unpatented3_name: "a name", //专利名称
    unpatented3_country: "China", //专利申请国
    unpatented3_apply_number: "0000001", //申请号
    unpatented3_apply_date: "2016/03/23", //专利申请日
    unpatented3_rank: "1" //排序
}
```

### Page9

```json
page9 : {
    //近五年申请人担任国际学术会议重要职务及在国际学术会议作大会报告,特邀报告情况
    info: "nothing" //无
}
```

### Page10

```json
page10 : {
    //申请人领导创新团队, 建设学术梯队, 培养青年人才情况
    info : "nothing" //无
}
```

### Page11

```json
page11 : {
    //申请人其他获奖情况
    info : "nothing" //无
}
```

### Page12

```json
page12 : {
    //申请人近五年教育教学与人才培养情况
    
    //授课情况
    course1_name: "computer science", //课程名称
    course1_object: "University students", //授课对象
    course1_count: "20", //总课时数
    
    course2_name: "computer science", //课程名称
    course2_object: "University students", //授课对象
    course2_count: "20", //总课时数
    
    course3_name: "computer science", //课程名称
    course3_object: "University students", //授课对象
    course3_count: "20", //总课时数
    
    course4_name: "computer science", //课程名称
    course4_object: "University students", //授课对象
    course4_count: "20", //总课时数
    
    course5_name: "computer science", //课程名称
    course5_object: "University students", //授课对象
    course5_count: "20", //总课时数
    
    course6_name: "computer science", //课程名称
    course6_object: "University students", //授课对象
    course6_count: "20", //总课时数
        
    course7_name: "computer science", //课程名称
    course7_object: "University students", //授课对象
    course7_count: "20", //总课时数
        
    course8_name: "computer science", //课程名称
    course8_object: "University students", //授课对象
    course8_count: "20", //总课时数
        
    course9_name: "computer science", //课程名称
    course9_object: "University students", //授课对象
    course9_count: "20", //总课时数
        
    course10_name: "computer science", //课程名称
    course10_object: "University students", //授课对象
    course10_count: "20", //总课时数
        
    //指导研究生情况
    doctoral_graduates: "10", //指导博士生毕业人数
    doctoral_students: "6", //指导博士生在读人数
    master_graduates: "7", //指导硕士生毕业人数
    master_students: "3", //指导硕士生在读人数
    
    //获国家级, 省部级教学成果情况
    project1_name: "a project name", //获奖项目名称
    project1_level: "national level", //获奖等级
    project1_date: "2014", //获奖年度
    project1_rank: "1", //排序
    
    project2_name: "a project name", //获奖项目名称
    project2_level: "national level", //获奖等级
    project2_date: "2014", //获奖年度
    project2_rank: "1", //排序
    
    project3_name: "a project name", //获奖项目名称
    project3_level: "national level", //获奖等级
    project3_date: "2014", //获奖年度
    project3_rank: "1", //排序
    
    project4_name: "a project name", //获奖项目名称
    project4_level: "national level", //获奖等级
    project4_date: "2014", //获奖年度
    project4_rank: "1", //排序
    
    project5_name: "a project name", //获奖项目名称
    project5_level: "national level", //获奖等级
    project5_date: "2014", //获奖年度
    project5_rank: "1",//排序
    
}
```

### Page13

```json
page13 = {
    //申请引进类别, 工作思路和预期目标
    apple_cate: "technology",
    info: "something in here" //拟开展工作的设想和预期目标(对申请引进类别的工作思想: 含教学, 科研, 研究生培养, 实验室和学科建设等拟开展的工作进行规划, 设定总体目标, 并分为三年度做好计划)
}
```

### Page14

```json
page14 : {
    //申请学校提供科研配套经费及使用计划
    info : "something in here", //申请学校提供科研配套经费预算总额及主要用途
    
    //申请学校提供科研配套经费预算明细
    //业务费(不超过经费预算总额的20%, 主要包括印刷费, 会议费, 差旅费, 劳务费, 耗材费)
    printing_fee: "1000", //印刷费
    meeting_fee: "1000", //会议费
    travel_fee: "1000", //差旅费
    consumables_fee: "1000", //耗材费
    labor_fee: "1000", //劳务费
    other_fee: "1000", //其他费用
    professional_fee_sum: "6000", //小计
    
    //拟购仪器设备费(不低于预算总额的80%, 主要用于改善必要的科研条件)
    equipment1_name: "equipment name", //设备名称
    equipment1_model: "equipment model", //设备型号
    equipment1_use: "equipment use", //主要用途
    equipment1_price: "1", //单价(万元)
    equipment1_quantity: "2", //设备数量
    equipment1_price_sum: "2", //金额(万元)
    
    equipment2_name: "equipment name", //设备名称
    equipment2_model: "equipment model", //设备型号
    equipment2_use: "equipment use", //主要用途
    equipment2_price: "1", //单价(万元)
    equipment2_quantity: "2", //设备数量
    equipment2_price_sum: "2", //金额(万元)
    
    equipment3_name: "equipment name", //设备名称
    equipment3_model: "equipment model", //设备型号
    equipment3_use: "equipment use", //主要用途
    equipment3_price: "1", //单价(万元)
    equipment3_quantity: "2", //设备数量
    equipment3_price_sum: "2", //金额(万元)
    
    equipment4_name: "equipment name", //设备名称
    equipment4_model: "equipment model", //设备型号
    equipment4_use: "equipment use", //主要用途
    equipment4_price: "1", //单价(万元)
    equipment4_quantity: "2", //设备数量
    equipment4_price_sum: "2", //金额(万元)
    
    equipment5_name: "equipment name", //设备名称
    equipment5_model: "equipment model", //设备型号
    equipment5_use: "equipment use", //主要用途
    equipment5_price: "1", //单价(万元)
    equipment5_quantity: "2", //设备数量
    equipment5_price_sum: "2", //金额(万元)
    
    equipment6_name: "equipment name", //设备名称
    equipment6_model: "equipment model", //设备型号
    equipment6_use: "equipment use", //主要用途
    equipment6_price: "1", //单价(万元)
    equipment6_quantity: "2", //设备数量
    equipment6_price_sum: "2", //金额(万元)
    
    equipment7_name: "equipment name", //设备名称
    equipment7_model: "equipment model", //设备型号
    equipment7_use: "equipment use", //主要用途
    equipment7_price: "1", //单价(万元)
    equipment7_quantity: "2", //设备数量
    equipment7_price_sum: "2", //金额(万元)
    
    equipment_price_sum: "140000", //小计
    
    all_price_sum: "146000" //合计
}
```

### Page15

```json
page15 : {
    //配偶情况表
    photo: "/static/applicant@gmail.com/spouse/photo.jpg", //配偶照片(URL)
    name: "Tom", //姓名
    spouse_name: "Marry", //配偶姓名
    sex: "female", //性别
    birth_date: "1980/08/08", //出生年月
    political_status: "people", //政治面貌
    obtained_form: "full-time", //取得形式(全日制, 成教, 自考等)
    degree: "master", //学历, 学位
    profession: "Computer Science", //所学专业
    technical_position: "Data Scientist", //现任专业技术职务
    working_time: "5years", //任职时间
    identity: "worker", //身份(干部或工人)
    now_working_company: "Hainan Medical University", //现工作单位
    jobs: "Data Scientist", //工作岗位
    tel: "17383722648", // 联系方式
    file_location: "海南省海口市龙华区学院路3号", //档案所在地
    learning_resume: "something in here", //学习简历
    working_resume: "something in here", //工作简历
}
```

### Page16

```json
page16 : {
    //个人要求(如住房, 配偶工作安排, 工作条件等)
    info: "something in here"
}
```

### Page17

```json
page17 : {
    applicant_signature : "Tom", //申请者签名
    confirm : "True" //是否同意 (一个勾选框) 
}
```



## 证明材料目录

这个目前还不确定, 这个材料实再是有点多, 而且像是证明这种都东西, 电子版的真的好吗? 中间可能会存在造假的问题. 远没有纸质的来的真实

### Page1

```json
page1 : {
    // 身份证复照片
    id_pic_front: "/pic_url", //身份证正面照片
    id_pic_end: "/pic_url", //身份证反面照片
}
```

### Page2

```json
page2 : {
    // 学历学位证照片
    degree_pci: "pic_url" //学历学位证照片
}
```

### Page3

```json
page3 : {
    // 教育部留学回国人员证明
    overseas_study_pic : "pic_url" // 教育部留学回国人员证明
}
```

### Page4

```json
page4 : {
    // 在美留学单位证明信
    usa_study_proof: "pci_url" // 在美留学单位证明信
}
```

### page5

```json
page5 : {
    // 五篇代表性论文全文以及中文简介
    ....
}
```







