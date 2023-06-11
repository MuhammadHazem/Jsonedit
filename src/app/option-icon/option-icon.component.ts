import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option-icon',
  templateUrl: './option-icon.component.html',
  styleUrls: ['./option-icon.component.scss']
})
export class OptionIconComponent implements OnInit {
  container: any;

  MOBILE_TYPES = {
    ANDROID: 'Android',
    IOS: 'IOS'
  }
  @Input() disabled = false;
  @Output() svgNotify = new EventEmitter<any>();
  svgPath: any = { name: "ic_assignment_24dp" };
  postFooterName = [
    'ic_comment',
    'ic_comment_box',
    'ic_comment_bubble',
    'ic_comment_bubbles',
    'ic_comment_triangle',
    'ic_share',
    'ic_share_arrow',
    'ic_share_circle',
    'ic_share_circle_fullbg',
    'ic_share_network',
    'ic_unlike_hand',
    'ic_unlike_heart',
    'ic_unlike_light_bulb',
    'ic_unlike_start',
    'ic_unlike_tick',
    'ic_view',
    'ic_view_eye_tab',
    'ic_view_aeye_view',
    'ic_view_eye_view',
    'ic_view_full_eye'
  ];
  iosNames = [
    'group-5',
    'ic-add-user-29-px',
    'ic-bus-29-px',
    'ic-calendar-29-px',
    'ic-car-29-px',
    'ic-channels-29-px',
    'ic-chat-29-px',
    'ic-explore-29-px',
    'ic-gallery-29-px',
    'ic-groups-29-px',
    'ic-help-29-px',
    'ic-list-29-px',
    'ic-location-29-px',
    'ic-message-29-px',
    'ic-news-29-px',
    'ic-phone-29-px',
    'ic-qr-code-29-px',
    'ic-settings-29-px',
    'ic-star-29-px',
    'ic-sticker-29-px',
    'ic-tickets-29-px',
    'ic-trip-29-px',
    'ic-contact-us-29-Px',
    'ic-search-29-Px'
  ];

  iconNames = [
    'ic_3d_rotation_24dp',
    'ic_ac_unit_24dp',
    'ic_accessibility_24dp',
    'ic_accessible_24dp',
    'ic_account_balance_24dp',
    'ic_account_balance_wallet_24dp',
    'ic_account_box_24dp',
    'ic_account_circle_24dp',
    'ic_add_shopping_cart_24dp',
    'ic_airport_shuttle_24dp',
    'ic_alarm_24dp',
    'ic_alarm_add_24dp',
    'ic_alarm_off_24dp',
    'ic_alarm_on_24dp',
    'ic_all_inclusive_24dp',
    'ic_all_out_24dp',
    'ic_android_24dp',
    'ic_announcement_24dp',
    'ic_aspect_ratio_24dp',
    'ic_assessment_24dp',
    'ic_assignment_24dp',
    'ic_assignment_ind_24dp',
    'ic_assignment_late_24dp',
    'ic_assignment_return_24dp',
    'ic_assignment_returned_24dp',
    'ic_assignment_turned_in_24dp',
    'ic_autorenew_24dp',
    'ic_backup_24dp',
    'ic_ball_ic_24dp',
    'ic_baseline_bluetooth_audio_24dp',
    'ic_baseline_chat_24dp',
    'ic_baseline_directions_car_24dp',
    'ic_baseline_drag_handle_24dp',
    'ic_baseline_event_24dp',
    'ic_baseline_favorite_24dp',
    'ic_baseline_favorite_border_24dp',
    'ic_baseline_gps_fixed_24dp',
    'ic_baseline_headset_24dp',
    'ic_baseline_local_cafe_24dp',
    'ic_baseline_person_24dp',
    'ic_baseline_play_circle_outline_24dp',
    'ic_baseline_search_24dp',
    'ic_baseline_star_rate_18px_24dp',
    'ic_book_24dp',
    'ic_bookmark_24dp',
    'ic_bookmark_border_24dp',
    'ic_bug_report_24dp',
    'ic_build_24dp',
    'ic_business_center_24dp',
    'ic_cached_24dp',
    'ic_cake_24dp',
    'ic_calendar_24dp',
    'ic_camera_enhance_24dp',
    'ic_card_giftcard_24dp',
    'ic_card_membership_24dp',
    'ic_card_membership_black_24dp',
    'ic_card_travel_24dp',
    'ic_casino_24dp',
    'ic_change_history_24dp',
    'ic_check_circle_24dp',
    'ic_child_care_24dp',
    'ic_child_friendly_24dp',
    'ic_chrome_reader_mode_24dp',
    'ic_class_24dp',
    'ic_code_24dp',
    'ic_compare_arrows_24dp',
    'ic_copyright_24dp',
    'ic_credit_card_24dp',
    'ic_dashboard_24dp',
    'ic_date_range_24dp',
    'ic_delete_24dp',
    'ic_delete_forever_24dp',
    'ic_description_24dp',
    'ic_dns_24dp',
    'ic_domain_24dp',
    'ic_donation_icon_24dp_24dp',
    'ic_done_24dp',
    'ic_done_all_24dp',
    'ic_donut_large_24dp',
    'ic_donut_small_24dp',
    'ic_eject_24dp',
    'ic_euro_symbol_24dp',
    'ic_event_24dp',
    'ic_event_seat_24dp',
    'ic_exit_to_app_24dp',
    'ic_explore_24dp',
    'ic_extension_24dp',
    'ic_face_24dp',
    'ic_favorite_24dp',
    'ic_favorite_border_24dp',
    'ic_feedback_24dp',
    'ic_find_in_page_24dp',
    'ic_find_replace_24dp',
    'ic_fingerprint_24dp',
    'ic_fitness_center_24dp',
    'ic_flight_land_24dp',
    'ic_flight_takeoff_24dp',
    'ic_flip_to_back_24dp',
    'ic_flip_to_front_24dp',
    'ic_free_breakfast_24dp',
    'ic_g_translate_24dp'
  ];

  locationIconNames = [
    'location_pin_hospital_32_px',
    'location_pin_hotel_32_px',
    'location_gas_station_32_px',
    'location_coffee_shop_32_px',
    'location_bank_32_px',
    'location_market_32_px',
    'bus_stop_32_px',
    'location_home_32_px',
    'location_pin_school_32_px',
    'soccer_field_32_px',
    'location_restaurant_32_px',
    'location_park_32_px',
    'location_mosque_32_px',
    'location_church_32_px',
    'mountain_32_px',
    'swimmer_32_px',
    'location_police_office_32_px',
    'location_dance_32_px',
    'location_post_office_32_px',
    'location_coffee_parking_32_px',
    'bus_station_32_px',
    'train_station_32_px',
    'air_port_32_px',
    'location_ship_32_px',
    'bike_parking_32_px',
    'motorcycle_parking_32_px',
    'location_park_32_px',
    'location_tent_32_px',
    'location_gym_32_px',
    'location_zoo_32_px',
    'traffic_light_32_px',
    'barrier_32_px'
  ];
  mobTypes: any;
  autoClose = true;
  showIconsMenu = false;
  selectedSeaction = 'firstSeaction';
  @Input() iconName: string = "";
  @Input() iconList: string = "";
  @Output() updateItemIconNotify = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.iconList) {
      this.iconList = this.MOBILE_TYPES.ANDROID;
      console.log(this.iconList);
      this.svgNotify.emit(this.svgPath);
    }
  }
  ngOnChanges() {
    if (this.iconName) {
      this.svgPath = { ...this.svgPath, name: this.iconName };
      this.svgNotify.emit(this.svgPath);
    }
  }

  selectIconSeaction(selectedSeaction: any) {
    this.autoClose = false;
    if (selectedSeaction === 'firstSeaction') {
      this.selectedSeaction = 'firstSeaction';
      this.iconNames = [
        'ic_3d_rotation_24dp',
        'ic_ac_unit_24dp',
        'ic_accessibility_24dp',
        'ic_accessible_24dp',
        'ic_account_balance_24dp',
        'ic_account_balance_wallet_24dp',
        'ic_account_box_24dp',
        'ic_account_circle_24dp',
        'ic_add_shopping_cart_24dp',
        'ic_airport_shuttle_24dp',
        'ic_alarm_24dp',
        'ic_alarm_add_24dp',
        'ic_alarm_off_24dp',
        'ic_alarm_on_24dp',
        'ic_all_inclusive_24dp',
        'ic_all_out_24dp',
        'ic_android_24dp',
        'ic_announcement_24dp',
        'ic_aspect_ratio_24dp',
        'ic_assessment_24dp',
        'ic_assignment_24dp',
        'ic_assignment_ind_24dp',
        'ic_assignment_late_24dp',
        'ic_assignment_return_24dp',
        'ic_assignment_returned_24dp',
        'ic_assignment_turned_in_24dp',
        'ic_autorenew_24dp',
        'ic_backup_24dp',
        'ic_ball_ic_24dp',
        'ic_baseline_bluetooth_audio_24dp',
        'ic_baseline_chat_24dp',
        'ic_baseline_directions_car_24dp',
        'ic_baseline_drag_handle_24dp',
        'ic_baseline_event_24dp',
        'ic_baseline_favorite_24dp',
        'ic_baseline_favorite_border_24dp',
        'ic_baseline_gps_fixed_24dp',
        'ic_baseline_headset_24dp',
        'ic_baseline_local_cafe_24dp',
        'ic_baseline_person_24dp',
        'ic_baseline_play_circle_outline_24dp',
        'ic_baseline_search_24dp',
        'ic_baseline_star_rate_18px_24dp',
        'ic_book_24dp',
        'ic_bookmark_24dp',
        'ic_bookmark_border_24dp',
        'ic_bug_report_24dp',
        'ic_build_24dp',
        'ic_business_center_24dp',
        'ic_cached_24dp',
        'ic_cake_24dp',
        'ic_calendar_24dp',
        'ic_camera_enhance_24dp',
        'ic_card_giftcard_24dp',
        'ic_card_membership_24dp',
        'ic_card_membership_black_24dp',
        'ic_card_travel_24dp',
        'ic_casino_24dp',
        'ic_change_history_24dp',
        'ic_check_circle_24dp',
        'ic_child_care_24dp',
        'ic_child_friendly_24dp',
        'ic_chrome_reader_mode_24dp',
        'ic_class_24dp',
        'ic_code_24dp',
        'ic_compare_arrows_24dp',
        'ic_copyright_24dp',
        'ic_credit_card_24dp',
        'ic_dashboard_24dp',
        'ic_date_range_24dp',
        'ic_delete_24dp',
        'ic_delete_forever_24dp',
        'ic_description_24dp',
        'ic_dns_24dp',
        'ic_domain_24dp',
        'ic_donation_icon_24dp_24dp',
        'ic_done_24dp',
        'ic_done_all_24dp',
        'ic_donut_large_24dp',
        'ic_donut_small_24dp',
        'ic_eject_24dp',
        'ic_euro_symbol_24dp',
        'ic_event_24dp',
        'ic_event_seat_24dp',
        'ic_exit_to_app_24dp',
        'ic_explore_24dp',
        'ic_extension_24dp',
        'ic_face_24dp',
        'ic_favorite_24dp',
        'ic_favorite_border_24dp',
        'ic_feedback_24dp',
        'ic_find_in_page_24dp',
        'ic_find_replace_24dp',
        'ic_fingerprint_24dp',
        'ic_fitness_center_24dp',
        'ic_flight_land_24dp',
        'ic_flight_takeoff_24dp',
        'ic_flip_to_back_24dp',
        'ic_flip_to_front_24dp',
        'ic_free_breakfast_24dp',
        'ic_g_translate_24dp'
      ];
    }
    if (selectedSeaction === 'secSeaction') {
      this.autoClose = false;
      this.selectedSeaction = 'secSeaction';
      this.iconNames = [
        'ic_gavel_24dp',
        'ic_get_app_24dp',
        'ic_gif_24dp',
        'ic_golf_course_24dp',
        'ic_grade_24dp',
        'ic_group_work_24dp',
        'ic_help_outline_24dp',
        'ic_highlight_off_24dp',
        'ic_history_24dp',
        'ic_home_24dp',
        'ic_hot_tub_24dp',
        'ic_hourglass_empty_24dp',
        'ic_hourglass_full_24dp',
        'ic_https_24dp',
        'ic_if_10_1516234_24dp',
        'ic_important_devices_24dp',
        'ic_info_24dp',
        'ic_info_outline_24dp',
        'ic_input_24dp',
        'ic_inv_ic_24dp',
        'ic_invert_colors_24dp',
        'ic_kitchen_24dp',
        'ic_la_ic_24dp',
        'ic_label_24dp',
        'ic_label_outline_24dp',
        'ic_language_24dp',
        'ic_launch_24dp',
        'ic_library_books_white_24dp',
        'ic_lightbulb_outline_24dp',
        'ic_line_style_24dp',
        'ic_line_weight_24dp',
        'ic_list_24dp',
        'ic_location_city_24dp',
        'ic_lock_24dp',
        'ic_lock_open_24dp',
        'ic_lock_outline_24dp',
        'ic_loyalty_24dp',
        'ic_markunread_mailbox_24dp',
        'ic_mood_24dp',
        'ic_mood_bad_24dp',
        'ic_motorcycle_24dp',
        'ic_note_add_24dp',
        'ic_notifications_24dp',
        'ic_notifications_active_24dp',
        'ic_notifications_none_24dp',
        'ic_notifications_off_24dp',
        'ic_notifications_paused_24dp',
        'ic_offline_pin_24dp',
        'ic_opacity_24dp',
        'ic_open_in_browser_24dp',
        'ic_open_in_new_24dp',
        'ic_open_with_24dp',
        'ic_outline_access_time_24dp',
        'ic_outline_mode_comment_24dp',
        'ic_outline_rss_feed_24dp',
        'ic_outline_share_24dp',
        'ic_outline_visibility_24dp',
        'ic_pages_24dp',
        'ic_pageview_24dp',
        'ic_pan_tool_24dp',
        'ic_party_mode_24dp',
        'ic_payment_24dp',
        'ic_people_24dp',
        'ic_people_outline_24dp',
        'ic_perm_camera_mic_24dp',
        'ic_perm_contact_calendar_24dp',
        'ic_perm_data_setting_24dp',
        'ic_perm_device_information_24dp',
        'ic_perm_identity_24dp',
        'ic_perm_phone_msg_24dp',
        'ic_perm_scan_wifi_24dp',
        'ic_person_24dp',
        'ic_person_add_24dp',
        'ic_person_outline_24dp',
        'ic_pets_24dp',
        'ic_picture_in_picture_24dp',
        'ic_picture_in_picture_alt_24dp',
        'ic_play_for_work_24dp',
        'ic_poll_24dp',
        'ic_polymer_24dp',
        'ic_pool_24dp',
        'ic_power_settings_new_24dp',
        'ic_pregnant_woman_24dp',
        'ic_print_24dp',
        'ic_public_24dp',
        'ic_query_builder_24dp',
        'ic_question_answer_24dp',
        'ic_raise_your_hand_to_ask_24dp',
        'ic_receipt_24dp',
        'ic_record_voice_over_24dp',
        'ic_redeem_24dp',
        'ic_remove_shopping_cart_24dp',
        'ic_reorder_24dp',
        'ic_report_problem_24dp',
        'ic_restore_24dp',
        'ic_restore_page_24dp',
        'ic_room_24dp',
        'ic_room_service_24dp',
        'ic_rounded_corner_24dp',
        'ic_rowing_24dp'
      ];
    }
    if (selectedSeaction === 'thirdSeaction') {
      this.autoClose = false;
      this.selectedSeaction = 'thirdSeaction';
      this.iconNames = [
        'ic_rv_hookup_24dp',
        'ic_schedule_24dp',
        'ic_school_24dp',
        'ic_search_24dp',
        'ic_sentiment_dissatisfied_24dp',
        'ic_sentiment_neutral_24dp',
        'ic_sentiment_satisfied_24dp',
        'ic_sentiment_very_dissatisfied_24dp',
        'ic_sentiment_very_satisfied_24dp',
        'ic_settings_24dp',
        'ic_settings_applications_24dp',
        'ic_settings_backup_restore_24dp',
        'ic_settings_bluetooth_24dp',
        'ic_settings_brightness_24dp',
        'ic_settings_cell_24dp',
        'ic_settings_ethernet_24dp',
        'ic_settings_input_antenna_24dp',
        'ic_settings_input_component_24dp',
        'ic_settings_input_composite_24dp',
        'ic_settings_input_hdmi_24dp',
        'ic_settings_input_svideo_24dp',
        'ic_settings_overscan_24dp',
        'ic_settings_phone_24dp',
        'ic_settings_power_24dp',
        'ic_settings_remote_24dp',
        'ic_settings_voice_24dp',
        'ic_share_24dp',
        'ic_shop_24dp',
        'ic_shop_two_24dp',
        'ic_shopping_basket_24dp',
        'ic_shopping_cart_24dp',
        'ic_smoke_free_24dp',
        'ic_smoking_rooms_24dp',
        'ic_spa_24dp',
        'ic_speaker_notes_24dp',
        'ic_speaker_notes_off_24dp',
        'ic_spellcheck_24dp',
        'ic_store_24dp',
        'ic_subject_24dp',
        'ic_supervisor_account_24dp',
        'ic_swap_horiz_24dp',
        'ic_swap_vert_24dp',
        'ic_swap_vertical_circle_24dp',
        'ic_system_update_alt_24dp',
        'ic_tab_24dp',
        'ic_tab_unselected_24dp',
        'ic_theaters_24dp',
        'ic_thumb_down_24dp',
        'ic_thumb_up_24dp',
        'ic_thumbs_up_down_24dp',
        'ic_timeline_24dp',
        'ic_toc_24dp',
        'ic_today_24dp',
        'ic_toll_24dp',
        'ic_touch_app_24dp',
        'ic_track_changes_24dp',
        'ic_translate_24dp',
        'ic_trending_down_24dp',
        'ic_trending_flat_24dp',
        'ic_trending_up_24dp',
        'ic_turned_in_24dp',
        'ic_turned_in_not_24dp',
        'ic_update_24dp',
        'ic_verified_user_24dp',
        'ic_view_agenda_24dp',
        'ic_view_array_24dp',
        'ic_view_carousel_24dp',
        'ic_view_column_24dp',
        'ic_view_day_24dp',
        'ic_view_headline_24dp',
        'ic_view_list_24dp',
        'ic_view_module_24dp',
        'ic_view_quilt_24dp',
        'ic_view_stream_24dp',
        'ic_view_week_24dp',
        'ic_visibility_24dp',
        'ic_visibility_off_24dp',
        'ic_watch_later_24dp',
        'ic_whatshot_24dp',
        'ic_window_24dp',
        'ic_work_24dp',
        'ic_youtube_searched_for_24dp',
        'ic_zoom_in_24dp',
        'ic_zoom_out_24dp',
        'ic_feeds_books_white_24_dp',
        'ic_check_circle_red_24_px',
        'ic_invites_red_24_px',
        'ic_local_play_24_px',
        'ic_star_red_24_px',
        'ic_live_tv_24dp',
        'ic_question_answer_24dp',
        'ic_ball_24_dp'
      ];
    }
  }

  autoCloseDisplay() {
    this.autoClose = true;
    console.log(this.autoClose);
  }

  selectItem(item: string) {
    this.svgPath = { ...this.svgPath, name: item };
    this.svgNotify.emit(this.svgPath);
    console.log(this.svgPath)
  }

  updateItemIconEvent(value: string) {
    this.selectItem(value);
    this.showMenu();
    this.updateItemIconNotify.emit(value);
  }

  showMenu() {
    if (this.showIconsMenu == true) {
      this.showIconsMenu = false;
    } else {
      this.showIconsMenu = true;
    }
  }

  get iconFirstTabStyle() {
    if (this.selectedSeaction === 'firstSeaction') {
      return { 'box-shadow': '0 0 16px 0 rgba(0, 0, 0, 0.25)' };
    }

    return;
  }

  get iconSecTabStyle() {
    if (this.selectedSeaction === 'secSeaction') {
      return { 'box-shadow': '0 0 16px 0 rgba(0, 0, 0, 0.25)' };
    }

    return;
  }

  get iconThirdTabStyle() {
    if (this.selectedSeaction === 'thirdSeaction') {
      return { 'box-shadow': '0 0 16px 0 rgba(0, 0, 0, 0.25)' };
    }

    return;
  }

  updateMinDate(e: any){
    this.container = e;
  }
}
