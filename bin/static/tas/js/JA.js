	 $(function () {
        $('form').bootstrapValidator({

　　　　　　　　name: 'This value is not valid',
            　feedbackIcons: {
                　　　　　　　　valid: 'glyphicon glyphicon-ok',
                　　　　　　　　invalid: 'glyphicon glyphicon-remove',
                　　　　　　　　validating: 'glyphicon glyphicon-refresh'
            　　　　　　　　   },
            fields: {
                name: {
                    message: '用户名验证失败',
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                nation: {
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                applicant_signatur: {
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                 political_status: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                
                doctoral_graduates: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                doctoral_students: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                master_graduates: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                
                 printing_fee: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                 meeting_fee: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                travel_fee: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                consumables_fee: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                 labor_fee: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                other_fee: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                 professional_fee_sum: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                
                
                
                master_students: {
                 
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                 tel: {
                   
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        },
                        numeric: {
                            message: '电话号码格式有误'
                        }
                    }
                },
                 e_mail: {
                
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        },
                        emailAddress: {
                            message: '邮箱地址格式有误'
                        }
                    }
                },
                 marital_status: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                paper1_name: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                paper1_published_date: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                
                equipment1_name: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                equipment1_model: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                equipment1_use: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                equipment1_price: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                equipment1_quantity: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                equipment1_price_sum: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                
                
                equipment_price_sum: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                all_price_sum: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                
                
                
                working_resume: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                learning_resume: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                jobs: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                identity: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                working_time: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                profession: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                obtained_form: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
               birth_date: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                file_location: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                now_working_company: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                technical_position: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                degree: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                political_status: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                spouse_name: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
              
                
                
                paper1_is_included: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                paper1_impact_factor: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                paper1_sci_iquote_times: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                course1_name: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                course1_object: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                course1_count: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                info: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空,没有则填"无"'
                        }
                    }
                },
                 paper1_ssci_iquote_times: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                paper1_cssci_iquote_times: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                
                
                 project1_name: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
               project1_nature_and_source: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                project1_funding: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                project1_start_date: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                project1_end_date: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                project1_rank: {
             
                    validators: {
                        notEmpty: {
                            message: '至少填一项'
                        }
                    }
                },
                 degree_country: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                address: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                home_tel: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        },
                         numeric: {
                            message: '电话号码格式有误'
                        }
                    }
                },
                sex: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                nationality: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                date_of_birth: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
               final_degree: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                degree_date: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                working_time: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                postal_code: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        },
                         numeric: {
                            message: '电话号码格式有误'
                        }
                    }
                },
                bachelor_date: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                bachelor_university: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                bachelor_specialty: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                final_degree: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                final_degree: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                final_degree: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                final_degree: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                 applicant_main_value: {
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                },
                title: {
             
                    validators: {
                        notEmpty: {
                            message: '该项不能为空'
                        }
                    }
                }
            }
        });
    });



