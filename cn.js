﻿const cn = {
	general: {
		home: "主页",
		next: "下一项",
		ok: "确认",
		done: "完成",
		cancel: "取消",
		confirm: "确认",
		apply: "应用",
		enter: "输入",
		scan: "扫描",
		save: "保存",
		save_as: "保存为",
		overwrite: "覆盖",
		select: "选择",
		hardware: "硬件",
		signal: "信号",
		usb: "USB",
		devices: "设备",
		connect: "连接",
		disconnect: "断开",
		yes: "是",
		no: "否",
		ignore: "忽略",
		error: "错误",
		back: "返回",
		delete: "删除",
		remove: "移除",
		online: "在线",
		offline: "离线",
		cloud: "云端",
		remote: "遥控",
		preset: "预设",
		camera: "相机",
		focuser: "电动调焦座",
		filter_wheel: "滤镜轮",
		filter: "滤镜",
		exposure: "曝光",
		binning: "像素合并",
		left: "Left",
		top: "Top",
		action: "动作",
		scope_type: "望远镜类型",
		solver_type: "解析类型",
		type: "类型",
		driver: "驱动",
		gain: "增益",
		offset: "偏置",
		format: "格式",
		iso: "ISO",
		count: "连拍",
		delay: "延时",
		status: "状态",
		target: "目标",
		angle: "角度",
		sep_profile: "SEP文件",
		direction: "方向",
		rotation: "旋转",
		automatic: "自动",
		manual: "手动",
		progress: "处理",
		position_angle: "方位角",
		details: "细节",
		skip: "跳过",
		updated: "已更新",
		new: "新建",
		remote_support: "远程帮助",
		logout: "登出",
		setting: "设置",
		hours: "时",
		minutes: "分",
		seconds: "秒",

		azimuth: "方位角",
		altitude: "高度角",
		tags: "标签",
		filename: "文件名",
		size: "尺寸",
		frame: "画幅",
		temperature: "温度",
		name: "名称",
		date: "日期",
		resolution: "分辨率",
		monitor: "监控",
		clear_all: "清除所有",
		pixels: "像素",

		select_file: "选择文件",
		select_folder: "选择文件夹",
		selected_dir: "已选目录",
		new_folder: "输入新文件夹名称",
		create_new_folder: "在此处创建新文件夹",
		empty_folder: "文件夹为空",

		train: "光路",
		no_data_found: "未找到数据",
		track: "跟踪",
		jobs: "工作",
		category: "类别",
		profile: "档案",
		arcmin: "角分",
		calculate: "计算",
		update: "更新",
		center: "中心",
		learn_more: "了解更多",

		select_option: "请选择...",
		search: "查找...",
		no_results: "无结果",
		on: "开",
		off: "关",
		go: "前往",
		add: "添加",
		load: "加载",
		edit: "编辑",
		refresh: "刷新",
		reset: "重置",
		reset_all: "全部重置",
		start: "开始",
		stop: "停止",
		stopping: "停止中",
		clear: "清除",
		solve: "解析",
		parked: "停放",
		unparked: "取消停放",
		open: "打开",
		close: "关闭",
		opened: "已打开",
		closed: "已关闭",
		enable: "允许",
		disable: "禁止",
		select_time: "选择时间",
		set: "设置",
		logging: "日志",
		drivers: "驱动",
		network: "网络",
		submit: "Submit",
		execute: "Execute",

		// Confirm Delete Alert
		alert_confirm_delete_title: "确认删除",
		alert_delete_profile_body: "你确认要删除已选择的文件吗？",
		alert_delete_scope_body: "你确定要删除已选择的望远镜吗？",

		// Confirm
		alert_confirmation_title: "确认",
		alert_confirmation_body: "是否确实要使用此名称创建｛0｝？",
		alert_overwrite_body: "文件“｛0｝”已存在。是否要覆盖它？",

		network_error: "请确认StellarMate已联网",
		internet_required: "请确认你已经联网",
		alert_comm_error_title: "连接错误",
		alert_comm_error_body: "与StellarMate连接失败.请确认你已经连接网络",
		ekoslive_down_title: "EkosLive停止运行",
		ekoslive_down_body:
			"EkosLive不在工作中,尝试重启StellarMate或者联系StellarMate技术支持.",
		kstars_down_title: "KStars停止工作",
		kstars_down_body:
			"KStars不在工作中,尝试重启StellarMate或者联系StellarMate技术支持.",
		reset_default: "恢复默认设置",
		external_storage: "外部存储器",
	},
	darkLibrary: {
		title: "暗场库",
		darks: "暗场",
		defects: "缺陷",
		prefer: "校准方式",
		create_darks_title: "创建暗场",
		create_defects_title: "创建缺陷图",
		view_masters_title: "查看主暗场",
		progress: "处理",

		create_darks: {
			exposure_range: "曝光范围",
			to: "To",
			temp_range: "温度范围",
			binning: "像素合并",
			binning_one: "1x1",
			binning_two: "2x2",
			binning_four: "4x4",
			total_images: "总共",
		},

		create_defect_map: {
			master_dark: "主暗场",
			bad_pixels: "坏点",
			hot_pixels: "热噪",
			generate_map: "生成图像",
			save_map: "保存",
			deviation: "σ",
		},
	},
	achievements: {
		score: "总得分",
		badge: "徽章",
		achievements: "成就",
		unlocked: "解锁成就",
		points: "分数",
		completed: "已完成",
		not_completed: "未完成",
		capture_preview_title: "首次之光！",
		ten_sequences_title: "星河相连",
		mount_goto_title: "魔法锁敌千里外",
		video_recording_title: "导演之剪",
		weather_check_title: "腾云驾雾",
		live_stacking_title: "星光闪耀",
		create_darks_title: "黑暗的力量",
		create_defect_title: "马赛克大师",
		import_mosaic_title: "拼图达人",
		messier_captured_title: "梅西耶探索者",
		all_messier_title: "梅西耶马拉松",
		scheduler_title: "序列规划师",
		capture_master_title: "天空捕手",
		capture_legend_title: "天空传说",
		paa_title: "完美主义者",
		guide_rms_title: "导星王中王",

		capture_preview_description:
			"拍摄预览图像：拍摄一张精美的预览图像，展现宇宙的神秘面貌。",

		ten_sequences_description:
			"星河连线：拍摄包含10张图像的序列，记录下宇宙中的连绵星光，串联成一幅壮丽的星河画卷。",

		mount_goto__description:
			"魔法定位：在新图像被捕获时，按住目标3秒钟来使用目标GOTO，在茫茫星空中精确定位，让您的望远镜准确锁定目标。",

		video_recording_description:
			"导演之剪：录制1分钟的时间流逝视频，将星空的变幻与宇宙的奥秘化为永恒的画面。",

		weather_check__description:
			"云层猎手：利用天气信息中的云图，至少放大8倍以检查天气，保证你的拍摄不受云层遮挡，尽情追寻星空的美丽。",

		live_stacking_description:
			"星光闪耀：实时叠加图像，至少执行5张图像，让宇宙中的星光在你的相机中闪耀绽放，谁说短曝不能拍深空。",

		create_darks_description:
			"黑暗的力量：创建50张暗场图像，用暗场干掉那些可恶的噪点。",

		create_defect_description:
			"马赛克大师：在马赛克修补图中生成80个以上的热点/冷点像素，用创造力修复图像的瑕疵，让宇宙的美丽更加完整无缺。",

		import_mosaic_description:
			"拼图达人：从相机导入需要的拼接图像，然后将多张图像拼接在一起，由此展现出更广阔的宇宙景象。",

		messier_captured_description:
			"梅西耶探索者：捕获了一个梅西耶天体，留下永恒的纪念，展示你对宇宙的探索精神和敏锐的观察力。",

		all_messier_description:
			"梅西耶马拉松：捕获了所有梅西耶天体，重走先人的探索之路。完成这一壮举，证明你是宇宙探索的真正先锋。",

		scheduler_description:
			"序列规划师：完成一个2小时或更长时间的拍摄序列，精准安排拍摄时间，捕捉到最佳的宇宙瞬间。",

		capture_master_description:
			"天空捕手：总共拍摄了500张图像，你是真正的天空捕手，记录下宇宙中的每一个细节和美丽瞬间。",

		capture_legend_description:
			"天空传说：总共拍摄了1000张图像，你已经成为天空摄影的传奇，你的作品将永远流传在宇宙之中。",

		paa_description:
			"完美主义者：在误差低于30角秒的情况下完成PAA，你的精确度和追求完美的态度令人钦佩。",

		guide_rms_description:
			"导星之王：使导星的总RMS误差小于0.5角秒，你是真正的导星之王，在与风、大气抖动的斗争中取得完美胜利。",

		filtered_image_description: "啊，是窄带！",
		gallery_image_description: "回忆过往",

		alert_reset_title: "重置成就",
		alert_agree_reset_body: "您确定要重置所有成就吗？",
	},
	tourGuide: {
		tour_guide: "指导",
		previous: "上一页",
		finish: "完成",
		title_devices_list: "设备列表",
		title_device_actions: "设备操作",
		title_profiles: "设备配置文件",
		title_port_selector: "端口选择",
		title_trains: "光路配置",
		title_weather_bar: "天气信息栏",
		title_cloud_report: "云量报告",
		title_next: "下一步是什么？",

		title_focus: "调焦",
		title_align: "对准",
		title_guide: "导星",
		title_capture: "拍摄",
		title_mount: "赤道仪",
		title_observatory: "天文台",
		title_scheduler: "序列",
		title_indi: "INDI控制面板",
		title_quick_controls: "快速控制",
		title_preview: "预览图像",
		title_framing: "拍摄",
		title_live_video: "实时视频",
		title_stop: "停止",
		title_live_stacking: "实时叠加",
		title_quick_settings: "快速相机设置",

		title_targets_info: "目标信息",
		title_search_bar: "搜索栏",
		title_time_controls: "时间设置",
		title_target_controls: "目标控制",
		title_object_info: "目标信息",
		title_fov: "视场",
		title_target_action: "目标动作",

		description_devices_list:
			"自动发现和手动添加的StellarMate设备列表。单击重新扫描以检测网络上的新StellarMate设备。",
		description_device_actions: "从列表中删除设备，执行恢复出厂设置或注销操作。",
		description_profiles:
			"在设备配置文件中管理天文设备。必须在启动配置文件前将所有设备接通并连接到StellarMate。开始配置文件后，请使用光路配置来配置每个设备的功能，然后单击Ekos按钮开始天体摄影会话。",
		description_port_selector:
			"在首次启动配置文件后，选择您设备的串口和/或网络设置。",
		description_trains: "使用视场配置来管理您的设备。为每个相机创建一个配置文件。",
		description_weather_bar: "简要的天气报告和当前站点波尔特暗夜等级",
		description_cloud_report: "云量超过3小时。",
		description_next:
			"通过单击目标选项卡，探索适用的天文目标。使用Go&Solve将您的目标居中在相机视场中。打开定位助手，实现完美的期望方向。前往Ekos选项卡设置图像序列和实时叠加图像。",

		description_focus: "使用电调进行对焦。",
		description_align: "通过解析图像获取当前指向坐标，使望远镜精确对准目标。",
		description_guide: "跟踪您的目标，保持赤道仪锁定，并使其能够进行长时间曝光。",
		description_capture: "使用可配置的设置创建图像序列。管理滤镜轮和暗场存储库。",
		description_mount: "切换跟踪，归位和中天翻转设置。配置自动零位。",
		description_observatory: "控制圆顶和防尘盖设备。",
		description_scheduler:
			"通过选择目标和序列文件来自动化整个天体摄影。从Telescopius导入拼接。",
		description_indi: "直接访问INDI控制面板。",
		description_quick_controls: "快速访问赤道仪，相机和转台控件。",
		description_preview: "拍摄图像预览。",
		description_framing: "无限循环曝光，直到停止",
		description_live_video: "开始实时视频流并报错到本地。",
		description_stop: "停止任何正在进行的曝光或录制。",
		description_live_stacking:
			"实时叠加图像以增加信噪比。如果存在进行中的拍摄序列，则实时叠加将使用实时获取的图像; 否则，它将使用快速相机设置中的设置循环曝光。",
		description_quick_settings: "选择视场配置文件并配置相机和滤镜轮设置。",

		description_targets_info:
			"目标管理器是StellarMate规划工具，可简化观测操作。从数千个天体中搜索并使用简单的标准进行过滤。使用定位助手定位您的目标。",
		description_search_bar:
			"过滤现有清单中的对象或通过输入名称并单击搜索按钮来搜索新对象。",
		description_time_controls: "如果Ekos处于离线状态，请调整目标日期和时间计算。",
		description_target_controls:
			"查看黄昏信息，管理视场范围，调整滤镜并选择目标类型。",
		description_object_info: "物体大小、上升、过境和设置时间。",
		description_fov: "单击进入构图助手模式。",
		description_target_action:
			"将目标添加到收藏夹或自定义列表中。仅命令GOTO或命令GOTO后拍摄和解决。如果Ekos处于离线状态，则安排该目标。",
		alert_guided_tour_title: "进行一次领略Stellarmate魅力的导览",

		description_stella_intro: "Stella is your personal smart digital assistant. You can use voice or text to communicate with Stella. Ask it about any topic in astronomy.",
		description_stella_example: "Here, you can view the example prompts.",
		description_stella_chat: "Here, you can view the chat history.",
		description_stella_input: "Here, you can input prompts related to astronomy to ask Stella.",
		description_stella_other_function: "You can also interact with Stella using voice and attach files.",
	},
	tooltip: {
		placeholder: "占位符 %{0} 或 %{1}",
		placeholder_file: "不带扩展名的.esq文件名。",
		placeholder_date: "保存文件时的当前时间和日期。",
		placeholder_type: "帧类型，例如：'亮场'、'暗场'",
		placeholder_exp: "曝光时长（秒）。",
		placeholder_exposure:
			"曝光持续时间以秒为单位，单位为普通数字，后缀不含任何单位。",
		placeholder_offset: "偏置。",
		placeholder_gain: "增益。",
		placeholder_bin: "像素合并。",
		placeholder_iso: "ISO(仅单反).",
		placeholder_pierside: "赤道仪指向",
		placeholder_temperature: "相机温度",
		placeholder_filter: "当前滤镜名称。",
		placeholder_seq:
			"图像序列标识符，其中 * 是使用的数字位数（1-9），此标记是必需的并且必须是格式中的最后一个元素。",
		placeholder_target: "目标名称。",
		placeholder_arbitrary:
			"格式字符串中也可以包括任意文本，%和/字符除外。/Path字符可用于定义任意目录。",
		placeholder_notes: "注意：",
		placeholder_case: "•标签区分大小写",
		placeholder_datetime:
			"•只在格式的文件名部分使用%Datetime标记，而不在路径定义中使用。",
		format_title: "使用占位符标记来定义图像文件名的格式。",
		suffix: "用于在文件名中附加序列号的数字位数。",
		paa_desc: "在极轴对准过程中使用解析法。解析速度较慢，但可以提供更准确的结果。",
		plate_solving:
			"使用解析获取校准过程中的指向偏差。用户应尝试减少下面更新错误行中的误差并最小化偏移。",
		mount_info: "赤道仪转动并计算误差",
		movestar_desc:
			"类似于Move Star，但是Ekos尝试跟踪正在移动的星星，并在可能时估计当前对准误差。",
		remote_description: "Add remote INDI drivers to chain with the local INDI server configured by this profile. Format this field as a comma-separated list of quoted driver name, host name/address and optional port:",
		remote_zwo_description: "Connect to the named camera on 192.168.1.50, port 8000.",
		remote_eqmod_description: "Connect to the named mount on 192.168.1.50, port 7624.",
		remote_port: "Connect to all drivers found on 192.168.1.50, port 8000.",
		remote_ip: "Connect to all drivers found on 192.168.1.50, port 7624.",
		remote_info: "When omitted, host defaults to localhost and port defaults to 7624. Remote INDI drivers must be already running for the connection to succeed."
	},
	splash: {
		checking_for_updates: "检测更新中...",
		downloading_package: "下载更新中...",
		installing_update: "安装更新包...",
		channel_update: "正在进行信道切换...",
		upto_date: "已是最新版本",
		update_installed: "更新已安装",
		loading: "加载中...",
	},
	validations: {
		username_required: "请输入用户名",
		username_tooshort: "至少需要3个字母",
		username_toolong: "不能超过64个字母",
		username_invalid: "用户名含有非法字符",
		password_required: "请输入密码",
		password_invalid: "至少需要6位",
		confirm_password_required: "请确认密码",
		confirm_password_mismatch: "密码错误",
		email_required: "请填写邮箱",
		email_invalid: "邮箱地址无效",
		license_required: "请输入许可证密钥",
		serial_required: "请输入序列号",
		new_scope_vendor: "请输入有效用户名",
		new_scope_model_invalid: "请输入有效的模型",
		new_scope_aperture_invalid: "请输入有效的光圈",
		new_scope_focal_length_invalid: "请输入有效的焦距",
		new_scope_focal_ratio_invalid: "请输入一个有效的焦比",
	},
	progress: {
		please_wait: "请稍候 ...",
		establishing_connection: "正在建立连接",
		cameras: "获取相机",
		mounts: "获取赤道仪",
		scopes: "获取望远镜",
		filter_wheels: "获取滤镜轮",
		registering: "注册中",
		registered: "注册完毕",
		authenticating: "登录中",
		authenticated: "登录完毕",
		checking_kstars: "检查KStars",
		kstars_open: "KStars启动",
		checking_ekoslive: "检查EkosLive...",
		ekoslive_connected: "EkosLive已连接",
		starting_ekos: "启动Ekos...",
		getting_devices: "获取设备...",
		loading_settings: "加载配置...",
		register_device: "已扫描二维码，注册设备: ",
	},
	welcome: {
		register_new_device: "注册新的设备？",
		have_existing_account: "已存在一个账号？",
		require_sm_plus_pro: "如果已购买，请注册",
	},
	device_scanner: {
		scanning: "正在联网获取StellarMate设备中，请稍侯。。。",
		qr_scan: "扫描设备上的二维码",
	},
	statuses: {
		Idle: "闲置",
		prep: "准备",
		run: "运行",
		Aborted: "中断",
		"Calibration error": "校准错误",
		Capturing: "正在捕获",
		"In Progress": "进行中",
		"Setting Temperature": "设置温度",
		Slewing: "移动中",
		Calibrating: "校准中",
		Tracking: "追踪中",
		Guiding: "导星中",
		Parking: "停放中",
		"User Input": "请输入",
		Complete: "完成",
		Suspended: "暂停",
		Parked: "已停放",
	},
	connect: {
		register_welcome: "请登录您的Stellarmate账号以同步设备.",
		welcome_heading: "欢迎使用",
		welcome_description:
			"请确认您已连接至StellarMate的热点或StellarMate与您的设备处于同一网络中",
		welcome_rescan: "点击”重新扫描”扫描局域网中的StellarMate",
		device_unreachable: "设备无法访问！ 请检查电源和网络设置",
		login_mismatch:
			"认证失败。App 密码与stellarmate.com上设定的密码不一致。请使用正确密码再次登入。",
		register_using_key: "Register Device using Serial number",
		old_stellarmate_heading: "版本过旧。请更新!",
		old_stellarmate_description:
			"您正在使用 StellarMate OS 的旧版本。若想继续使用本应用，请务必更新至  StellarMate 的最新版本。",
		primary: "主镜",
		guide: "导星相机",
		scope: "导星镜",
		btn_rescan: "重新扫描",
		btn_port_select: "端口选择",
		btn_sync_gps: "同步GPS",
		btn_dslr_setup: "相机设置",
		btn_clear_driver_config: "清除设备设置",
		scan_in_progress: "正在扫描 ...",
		connection_in_progress: "正在连接StellarMate...",
		registration_in_progress: "正在注册StellarMate...",
		logging_in_progress: "正在登陆StellarMate...",
		connecting: "连接中...",
		logging: "登陆中...",
		generic: "通用串口",
		select_driver: "请选择设备类别和驱动",
		invalid_ip: "找不到IP地址或IP{0}无效。请再试一次。",

		cloudsMap: {
			btn_clouds_map: "云图",
			attribution: "OpenStreetMap",
			map_title: "三小时内云图",
			bortle_class: "暗夜等级",
		},

		ip_address: "请输入IP地址",
		login_register: {
			heading: "认证",
			heading_online: "请登录stellarmate.com",
			connect_to_internet: "您必须联网",
			connect_to_sync: "此操作仅用于同步您的帐户.",
			reset_app:
				"提示：你可以通过转到“关于”选项，单击“重置应用程序”按钮，然后重新启动应用程序，将应用程序与你的在线帐户重新同步",
			no_valid_device: "无有效的设备信息",
			setup_guide: "设置导星",
			register: "注册",
			login: "登入",
			serial: "序列号#",
			license: "许可证密钥",
			username: "用户名",
			password: "密码",
			confirm_password: "确认密码",
			first_name: "名",
			last_name: "姓",
			email: "邮箱",
			manually: "Manually",
		},
		device_manager: {
			alert_confirm_remove_title: "确认移除",
			alert_confirm_remove_body: "确定移除该设备？",
			btn_sign_out: "登出",
		},
		profile_manager: {
			heading: "配置文件",
		},
		port_selector: {
			connect_all: "连接所有",
		},
		manually_add_device: {
			heading: "手动添加设备",
			btn_add_device: "添加设备",
			alert_unreachable_title: "发生错误",
			alert_unreachable_body:
				"尝试在指定的IP地址处寻找设备时出错，请检查IP地址，然后重试",
		},
		device_scanner: {
			no_device_before_scan: "未检测到设备，请运行扫描程序",
			no_device_after_scan: "扫描完成，未发现设备",
			auto_scanned: "自动扫描",
			manually_added: "手动添加",
			add_a_device: "添加设备",
			devices_detected: "检测完毕",
			no_network_found: "未发现设备，请确认您的网络连接",
		},
		add_profile: {
			add_profile: "添加配置文件",
			edit_profile: "编辑配置文件",
			mount: "赤道仪",
			ccd: "主相机 1",
			dome: "穹顶",
			focuser: "电动调焦座",
			filter: "滤镜",
			guider: "主相机 2",
			ao: "自适应光学设备",
			weather: "天气",
			aux1: "辅助设备1",
			aux2: "辅助设备2",
			aux3: "辅助设备3",
			aux4: "辅助设备4",
            indi_server: "INDI Server",
            local: "Local",
            host: "Host",
            web_manager: "INDI Web Manager",
            profile_settings: "Profile Settings",
            auto_connect: "Auto Connect",
            port_selector: "Port Selector",
            usb_reset: "Force USB Reset",
            remote_drivers: "Remote Drivers",
			feedback: "Feedback",
			stella_feedback_optional: "(Optional) Feel free to add more details.",
			stella_feedback: "Feedback submitted successfully.",
			stella_feedback_placeholder: "Please provide additional feedback",
			stella_prompt_request: "Request for Stella handled successfully✅",
			stella_xml_failure: "Failed to generate XML",
			stella_history_success: "History deleted successfully.",
			stella_history_failure: "Error deleting history"
		},
		add_scope: {
			add_scope: "添加望远镜",
			edit_scope: "编辑望远镜",
			vendor: "厂商",
			aperture: "口径 (mm)",
			focal_length: "焦距 (mm)",
		},
		auto_detect: {
			alert_auto_detect_title: "自动检测说明",
			alert_auto_detect_body:
				"请先从 StellarMate 中拔出所有设备，然后按确定。然后逐个插入它们以检测设备类型和驱动程序。在每个设备插入后，您需要确认驱动程序。",
			alert_mapped_title: "设备映射",
			alert_mapped_body: "设备串行端口成功映射。",
			alert_missing_driver_title: "缺少设备",
			alert_missing_driver_body: "你必须先选择一个设备",
		},
		dslr_setup: {
			width: "宽",
			height: "高",
			pixel_width: "像素宽",
			pixel_height: "像素高",
		},
	},
	targets: {
		now: "现在",
		night: "夜晚",
		rise: "升起",
		moon: "月亮",
		sun: "太阳",
		search: "搜索",
		cam_width: "视场宽度",
		cam_height: "视场高度",
		fov_warning: "视场太小或太大，请检查！",
		phases: {
			new_moon: "新月",
			full_moon: "满月",
			first_quarter: "上弦月",
			third_quarter: "下弦月",
			waxing_crescent: "娥眉月",
			waxing_gibbous: "盈凸月",
			waning_crescent: "残月",
			waning_gibbous: "亏凸月",
		},
		lists: "列表",
		framing_assistant: "定位助手",
		target_rotation: "目标方位角",
		current_rotation: "当前方位角",
		rotate_capture: "旋转并拍摄",
		goto_rotate: "去并旋转",
		angular_offset: "角度偏差",
		no_objects_in_list: "找不到目标。请检查活动列表，调整或重置过滤器。",
		go_and_solve: "前往并求解",
		fov_profile: "视场角配置",
		fov_width: "视场宽度",
		fov_height: "视场高度",
		alert_select_FOV_body: "请创建或选择FOV配置文件，以便使用构图助手。",
		alert_list_exists_body: "相同名称列表已存在！",
	},
	ekos: {
		heading: "Ekos",
		tgl_mount: "赤道仪",
		tgl_solution_bar: "状态栏",
		tgl_sequence: "拍摄队列",
		tgl_properties: "属性",
		alert_ekos_offline_title: "Ekos离线中",
		alert_ekos_offline_body: "Ekos目前处于离线状态，是否开启设备匹配?",
		ekos_dialog: {
			auto_closes_in: "自动关闭",
		},
		indi: {
			no_logs: "没有可用于此驱动的日志",
		},
		controls_bar: {
			mount_speed: "赤道仪转速",
			centering: "居中",
			find: "寻找",
			max: "最大",
			parking_position: "归位位置设置成功",
		},
		collapse_align: {
			heading: "导星",
			action_sync: "同步",
			action_slew: "转动至目标",
			action_nothing: "不进行任何操作",
			solver_backend: "解析平台",
			control: "控制",
			solve: "拍摄 & 解析",
			load: "加载 & 转动",
			polar: "极轴校准",
			accuracy: "精度",
			settle: "稳定时间",
			dark: "暗场",
			arcsec: "角秒",
			ms: "毫秒",
			x_axis: "迭代次数",
			y_axis: "误差（角秒）",
			refresh_rate: "刷新频率",
			image_selected: "图像选择成功",
			select_method: "请选择图像的选择模式",
			device_gallery: "手机/平板电脑库",
			sm_storage: "SM 存储",
			request_storage_permission: "请允许存储权限",
			celestial_warning: "解析在离天极附近无法使用！",
			manualRotator: {
				heading: "手动转动器",
				current_pa: "当前位置角",
				target_pa: "目标位置角",
				another_image: "拍摄另一张图片",
			},
			align_settings: {
				rotator_control: "场旋器控制",
				use_scale: "使用缩放",
				use_position: "使用位置",
			},
			calibration_settings: {
				pulse: "脉冲",
				max_move: "最大移动范围",
				iterations: "迭代",
				two_axis: "双轴",
				square_size: "自动正方形大小",
				calibrate_backlast: "在导星校准时消除赤纬背隙",
				reset_calibration: "每次望远镜移动后重置导星校准",
				reuse_calibration: "尽可能存储和重复使用导星校准",
				reverse_calibration: "在赤道仪中天翻转时，反转赤纬以重复使用校准值",
				skyflats: "天空平场",
			},
		},

		collapse_camera: {
			heading: "相机设置",
			type_light: "亮场",
			type_bias: "偏置",
			type_flat: "平场",
			type_dark: "暗场",
			format_fits: "FITS",
			format_native: "RAW",
			cooling_unavailable: "制冷功能不可用",
			btn_add_to_sequence: "添加到拍摄序列",
			btn_loop: "循环",

			rotator_control: {
				title: "旋转器",
				angle: "场旋角度",
				offset: "相机偏移",
				pierside: "相机立柱侧",
				flip: "翻转策略",
				pos_angle: "相机位置角",
				reverse_direction: "反转旋转器",
				flip_rotator: "Preserve Rotator Angel",
				flip_position: "Preserve Position Angel",
			},

			capture_settings: {
				miscellaneous: "杂项",
				temperature: "温度阈值",
				temperature_tooltip:
					"请求温度设定点与测量温度设定点之间的最大可接受差值。当温度阈值低于该值时，温度设定点请求被认为是成功的。",
				guiding: "导星稳定",
				guiding_tooltip: "在导星恢复后等待几秒钟，以稳定导星。",
				dialog: "对话超时",
				dialog_tooltip: "关闭或打开望远镜对话框超时（秒）。",

				reset_sequence: "每次重启后重置拍摄队列",
				reset_sequence_tooltip:
					"开始序列时，将所有已拍摄计数重置为零。启用“记住序列进度”后，序列功能将覆盖此选项。",
				reset_mount: "在中天反转后重置赤道仪校准模型",
				reset_mount_tooltip: "在中天反转后重置赤道仪校准模型",
				use_flip: "在赤道仪支持的情况下使用反转功能",
				use_flip_tooltip: "在赤道仪支持的情况下使用反转功能",
				summary_preview: "缩略图预览",
				summary_preview_tooltip: "在缩略图中预览拍摄到的FITS图像",

				force_dslr: "强制单反预设",
				image_viewer: "单反图像查看器",

				sequence_focus: "序列中对焦",
				hfr_threshold: "HFR阈值修正",
				hfr_threshold_tooltip:
					"设置HFR阈值百分比增益。当自动对焦操作完成时，自动对焦HFR值增加该阈值百分比值并存储在捕获模块内。如果顺序对焦已启用，则自动对焦模块仅在当前HFR值超过捕获模块HFR阈值时执行自动对焦程序。增加值以允许在不需要完全自动对焦的情况下更轻松地更改HFR值。",
				sequence_check: "序列中HFR检查",
				sequence_check_tooltip: "在拍摄多张图像后进行序列内HFR检查",

				median: "使用中值对焦",
				median_tooltip:
					"计算每次自动对焦操作完成后的焦点中值。如果自动对焦结果随着时间的推移而逐渐变差，则中值应反映这一趋势，并在视觉条件恶化时防止不必要的自动对焦操作。",
				save_sequence: "序列HFR保存到文件中",
				save_sequence_tooltip:
					"依次，HFR阈值控制自动聚焦处理何时开始。如果测得的HFR值超过HFR阈值，则启动自动对焦过程。如果HFR阈值最初为零（默认），则在应用HFR阈值修改器百分比之后，使用自动聚焦过程最佳HFR值来设置新的HFR阈值。这个新的HFR阈值随后用于后续的顺序聚焦检查。如果启用此选项，HFR阈值将保持不变，并保存到序列文件中。",
			},
		},
		capture_presets: {
			heading: "预设",
		},
		capture_limits: {
			heading: "限制设置",
			guiding_deviation: "导星误差 <",
			guiding_deviation_unit: '"',
			focus_hfr: "自动对焦如果HFR >",
			focus_hfr_unit: "像素",
			focus_deltaT: "自动对焦如果ΔT° >",
			focus_deltaT_unit: "°C",
			refocus_n: "重新对焦每",
			refocus_n_unit: "分",
			refocus_on_hfr: "Refocus on HFR. Use",
			refocus_meridian: "中天翻转后重新对焦",
			check_every: "每次都检查",
			about_guide_deviation: "关于如果导星误差>",
			start_deviation: "只有在导星出现误差时才启动<",
			guide_deviation: "导星误差",
			consecutive_times: "连续次数",
			dither_job: "每个任务后都抖动",
		},
		capture_filters: {
			heading: "滤镜轮设置",
			auto_focus: "自动对焦",
			lock_filter: "锁定滤镜",
			no_filters: "未发现可用滤镜！",
		},
		targets_filters: {
			object_type: "目标类型",
			alt: "Alt",
		},
		capture_auto_calibration: {
			heading: "自动校准",
			flat_source: "平场源",
			flat_duration: "平场曝光时间",
			dust_builtin: "带内置平场灯的镜头盖",
			dust_external: "带外置平场灯的镜头盖",
			wall: "墙",
			az: "方位角",
			adu: "ADU",
			tolerance: "容差",
			park_mount: "赤道仪停放",
			park_dome: "归位穹顶",
			pre_actions: "校准前置准备",
		},
		capture_file: {
			filename: "文件名",
			heading: "文件设置",
			prefix: "前缀",
			script: "脚本",
			directory: "目录",
			ts: "时间戳",
			duration: "持续时间",
			suffix: "后缀",
			usb: "USB 成功卸载",
			unmount: "卸载",
		},
		collapse_dome: {
			heading: "穹顶",
			cap: "窗口",
			dome: "圆顶",
			shutter: "快门",
			dome_slaving: "圆顶从动",
			params: "参数",
			measurements: "测量值",
			autosync_threshold: "自动同步阈值（度）",
			radius: "半径（米）",
			shutter_width: "快门宽度（米）",
			n_displacement: "北方向偏移（米）",
			e_displacement: "东方向偏移（米）",
			up_displacement: "朝上偏移（米）",
			ota_offset: "OTA 偏移（米）",
		},
		collapse_focus: {
			heading: "调焦",
			hfr: "半高全宽（HFR）",
			hfr_plot: "HFR图",
			focus_in: "向内调焦",
			focus_out: "向外调焦",
			steps: "步数",
			settings: {
				suspend_guiding: "暂停导星",
				auto_select_star: "自动选择星",
				subframe: "子帧",
				fullfield: "全景",
				dark: "暗场",
				annulus: "环",
			},
			process: {
				title: "处理",
				detection: "探测",
				algorithm: "算法",
				threshold: "阈值",
				effect: "效果",
				average_over: "平均",
				kernel_size: "核大小",
				num_of_rows: "行数",
				sigma: "Sigma",
			},
			mechanics: {
				title: "机械",
				initial_step_size: "初始步长",
				max_travel: "最大移动范围",
				max_step_size: "最大步长",
				backlash: "背隙",
				out_step_multiple: "向外步长倍数",
				number_steps: "步数",
				af_overscan: "AF过扫描",
				capture_timeout: "拍摄超时",
				motion_timeout: "动作超时",
				overscan_delay: "过扫描延迟",
			},
		},
		collapse_guide: {
			total_rms_plot: "RMS图",
			scope_primary: "主镜",
			guidingRate: "导星速率",
			via: "通过",
			box: "方框",
			effects: "效果",
			dither: "微移",
			frequency: "频率",
			every: "每",
			frames: "帧",
			gpg: "GPG",
			directions: "方向",
			dec: "赤纬",
			swap: "交换",
			east: "+",
			west: "-",
			north: "+",
			south: "-",
			subframe: "子帧",
			autostar: "自动选星",
			aggressiveness: "修正强度",
			rarms: '赤经（RMS）"',
			derms: '赤纬（RMS）"',
			totalrms: '总计（RMS）"',
			advanced: "高级",
			clear_model: "清除校准模型",
			yAxis: "漂移（角秒）",

			min_error: "最小误差",
			max_response: "最大响应",
		},
		collapse_observatory: {
			heading: "天文台",
		},
		collapse_polar: {
			heading: "极轴校正",
			mount_direction: "赤道仪转向",
			manual_slew: "手动旋转",
			west: "西",
			east: "东",
			mount_rotation: "赤道仪回转",
			refresh: "刷新",
			fov_error: "无效：视场广度必须为30角分以上",
			polar_error: "极轴错误",
			az_error: "AZ 错误: ",
			al_error: "AL 错误: ",
		},
		collapse_sequence: {
			progress: "进度",
			sequence: "序列",
			overall_progress: "总进度",
			sequences: "所有序列",
			no_sequences: "无拍摄序列，您可以在相机设置中添加",
			alert_sequence_error_body: "保存序列文件时出错",
			alert_sequence_loading_body: "加载序列文件时出错",
			alert_sequence_delete_body: "删除序列文件时出错",
		},
		collapse_mount: {
			meridian_flip: "子午线翻转",
			flip_if_ha: "若HA >",
			flip_if_ha_unit: "°，进行翻转",
			pierside: "立柱侧",
			auto_park: "自动停放",
			auto_park_everyday: "每天",
			park_at: "停放于",
			reset_options: "重置选项",
			min_alt: "最小高度",
			max_alt: "最大高度",
			enable_alt_limits: "启用高度限制",
			enable_ha_limits: "启用HA限制",
			max_ha: "最大HA（小时）",
			clear_model: "清除模型",
			east: "东",
			west: "西",
			east_long: "东（向西指）",
			west_long: "西（向东指）",
			reverse_NS: "反转北/南",
			reverse_WE: "反转西/东",
			time_source: "Time source",
			location_source: "Location source",
		},
		modal_add_to_seq: {
			heading: "添加到序列",
		},
		modal_goto_sync: {
			heading: "Goto&同步",
			category: "星体类型",
		},
		mount_status_bar: {
			ra: "RA",
			de: "DE",
			az: "AZ",
			at: "AL",
			ha: "HA",
		},
		camera_status_bar: {
			bin: "像素合并",
		},
		solution_bar: {
			dra: "赤经偏差",
			dde: "赤纬偏差",
			arcsec: '"',
			pix: "像素",
			rot: "旋转角",
			fov: "视场",
		},
		mount_overlay: {
			right_asc: "赤经",
			declination: "赤纬",
		},
		histogram: {
			mean: "均值",
			median: "中值",
			minimum: "最小",
			maximum: "最大",
			bit_depth: "位深",
			non_linear_histogram: "非线性直方图",
		},
		livestacking: {
			auto_dark: "自动暗场",
			plate_solve: "解析",
			background: "背景",
			saturation: "饱和度",
			contrast: "对比度",
			sigma_clipping: "Sigma滤波",
			noImages: "未找到实时叠加图像",
		},
		scheduler: {
			scheduler: "序列管理器",
			j2000: "J2000",
			add_sequences: "添加序列",
			fits: "FITS 文件",
			priority: "优先级",
			profile: "配置文件",
			startupConditions: "启动条件",
			JobConstraints: "限制条件",
			completionConditions: "完成条件",
			observatoryStartup: "天文观测台启动",
			abortedJobManagement: "异常处理",
			observatoryShutdown: "天文观测台关闭",
			alt: "高度限制",
			moon: "月亮高度限制",
			twilight: "日出日落时间限制",
			artifHorizon: "地平线限制",
			sequenceCompletion: "序列完成条件",
			repeatFor: "重复执行次数",
			repeatUntilTerminated: "重复直到终止",
			repeatUntil: "重复执行直到",
			unparkDome: "解锁天文馆穹顶限制",
			unparkMount: "解锁望远镜限制",
			uncap: "卸下镜头盖限制",
			warmCCD: "相机预热限制",
			none: "无优先级限制",
			queue: "序列模式",
			immediate: "立即执行模式",
			rescheduleErrors: "重新排队等待时间",
			no_jobs: "队列中没有任务",
			err_loading_folders: "加载文件夹时发生错误",
			err_loading_fits: "加载 .fits 文件时发生错误",
			err_delete_file: "删除文件时发生错误",
			add_job: "添加任务",
			start_jobs: "启动和停止任务",
			culimination: "天文望远镜最高点偏移",
			create_jobs: "创建任务",

			mosaic: {
				import: "导入拼接图像",
				planner: "拼接规划器",
			},

			scheduler_settings: {
				lead_time: "提前量",
				lead_time_tooltip:
					"任务之间的最短时间（分钟）。序列在该提前期之前的计划启动时间之前开始执行作业。提前运行是有用的，因为自动对焦、调整导星可能需要很长时间才能完成。",
				pre_dawn: "黎明前",
				pre_dawn_tooltip: "不要允许在黎明前超过这么多分钟安排或执行作业。",
				pre_emptive: "先发制人的停机",
				pre_emptive_tooltip:
					"如果在这么多小时内没有安排序列任务，请执行完整的关闭过程，并在下一个任务准备就绪后重新启动天文台操作。",
				setting_altitude: "设置高度截止",
				setting_altitude_tooltip:
					"在海拔限制之前，不允许将任务安排在低于这么多度的位置。实际执行一直进行到高度限制。",
				dust_offset: "黄昏偏置",
				dust_offset_tooltip: "用这么多小时抵消天文黄昏。此正值或负值可调整微光限制。",
				dawn_offset: "黎明偏置",
				dawn_offset_tooltip: "用这么多小时抵消天文黎明。此正值或负值可调整微光限制。",

				stop_ekos: "关机后停止Ekos",
				stop_ekos_tooltip: "成功执行关闭程序后，停止INDI和Ekos。",
				shutdown_script: "关机前中止INDI",
				shutdown_script_tooltip:
					"如果关闭脚本终止INDI服务器，请启用此选项，以便不会生成断开连接错误。",
				remember_job: "记住任务进度",
				remember_job_tooltip: "在处理预定任务时，从存储中的最后一张图像开始恢复序列。",

				reset_mount: "在对准失败时重置赤道仪模型",
				reset_mount_tooltip: "在对准失败时重置赤道仪模型",
				reset_mount_before: "在开始每个作业之前重置赤道仪模型",
				reset_mount_before_tooltip: "在开始每个作业之前重置赤道仪模型",
				force_realign: "在重新启动作业之前强制重新对准",
				force_realign_tooltip:
					"如果启用了对准功能，则调度程序会在重新启动任何作业之前进行重新对准，即使导星也处于活动状态。",
				restart_align: "在导星校准失败时重新开始对准",
				restart_align_tooltip:
					"如果导星校准失败，则在继续导星重新校准过程之前重新启动对准过程。如果校准过程偏离了目标物体的视场，这可以帮助重新将其居中。",

				offsets: "偏移量",
				clean_jobs: "清理和作业",
				alignment: "对准",

				verify_image: "每隔一段时间验证捕获图像位置",
				verify_image_tooltip:
					"在捕获后计算位置时，每隔N张图像计算一次。设置为0表示禁用。",
				reset_pipeline: "如果验证的图像位置超过设定值，则重置流程",
				reset_pipeline_tooltip:
					"如果捕获的位置超过目标位置这么多角分钟，中止捕获并重新安排流程。",
				arcminutes: "角分",
			},
		},
		summary: {
			empty: "没有可用的摘要数据",
			deviation: "偏差",
			inactive: "非活动的",
		},
	},
	optical_train: {
		optical_trains: "光路",
		telescope: "望远镜/镜头",
		create_new: "创建新项目",
		dslr_lens: "单反相机镜头",
		reset_train: "重置模型",
		focal_ratio: "焦距比",
		guide_via: "导星途径",
		tooltip: {
			title: "选择接收导星校正脉冲的设备",
			subject: "可以是以下设备之一：",
			mount_device:
				"如果望远镜可以接收导星校正脉冲，则最好选择它，以便将脉冲直接发送到望远镜。这是推荐的选项。",
			st4_device:
				"如果在导星相机和望远镜之间使用ST4连接，则应选择导星相机作为导星设备。",
			dedicated_device:
				"如果使用专用导星设备（例如Shoestring GPUSB），则应将其选择为导星相机。",
			dedicated: "专用",
			filterWheel:
				"选择一个滤镜轮。这必须是通过USB连接到StellarMate的独立滤镜轮。如果您的滤镜轮内置在相机中，请将此项留空。",
		},
	},
	status: {
		system: "系统",
		info: "信息",
		software: "软件",
		cpu: "CPU",
		ram: "RAM",
		storage: "存储",
		stable: "稳定版",
		beta: "测试版",
		wifi_network: "无线IP",
		hotspot_network: "热点IP",
		ethernet_network: "以太网IP",
		model: "型号",
		version: "版本",
		hostname: "主机名",
		time: "时间",
		release_type: "版本类型",
		updates: "更新选项",
		hotspotMode: "热点模式",
		wifiNetwork: "Wifi网络",
		wifiCountry: "WiFi国家类型",

		wifiBand: "WiFi带宽",
		update_available: "可用更新",
		update_unavailable: "暂不可用更新",
		update_in_progress: "更新中",
		btn_vnc: "远程桌面 (VNC)",
		btn_web_manager: "Web客户端",
		btn_restart: "重启",
		btn_shutdown: "关机",
		btn_manage_wifi: "更改网络",
		btn_enable_direct_ethernet: "启用以太网",
		btn_disable_direct_ethernet: "禁用以太网",
		btn_enable_hotspot: "启用热点",
		btn_disable_hotspot: "禁用热点",
		btn_change_hostname: "更改主机名",
		btn_check_for_updates: "检查更新",
		btn_update_now: "立即更新",
		btn_update_in_progress: "更新中...",
		btn_factory_reset: "恢复出厂设置",
		btn_change_resolution: "变更协议",
		btn_later: "稍后",
		btn_resize_fs: "重置SD卡",
		btn_continue: "继续",
		information_ekos_offline:
			"Ekos离线。请直接启动设备配置文件或通过计划程序启动。",
		no_camera_detected: "没有相机被选择或者相机已离线",

		alert_device_offline_title: "设备已离线",
		alert_device_offline_body: "设备似乎已经离线。是否要登录激活？",
		alert_restart_title: "重启StellarMate",
		alert_restart_body: "您的设备即将重启。重启后请尝试再次连接。",
		alert_shutdown_title: "关闭StellarMate",
		alert_shutdown_body: "您的设备即将关闭，重新使用需要手动开启。",
		alert_resize_title: "重置 microSD Card 大小",
		alert_resize_body: "StellarMate会扩展到全部SD卡容量. 请重启StellarMate",
		alert_resize_btn_resize: "重置大小",
		alert_hotspot_enable_title: "启用热点",
		alert_hotspot_enable_body:
			"启用热点会使StellarMate断开当前加入的wifi网络，并启动自己的热点。若继续使用StellarMate，您需要连接到此热点网络。是否继续?",
		alert_hotspot_post_enable_title: "请连接到热点",
		alert_hotspot_post_enable_body:
			"您现在可以连接到“stellarmate”热点，并在连接后点击确认以继续",
		alert_hotspot_disable_body:
			"禁用热点将使StellarMate连接到其先前连接过的无线网络。热点禁用时，您需要在同一网络继续使用StellarMate。是否继续?",
		alert_factory_reset_body: "恢复出厂设置完成，请立即重启StellarMate",
		alert_factory_reset_confirmation_body:
			"您确定要将设备恢复到出厂设置吗？所有设置都将被清除。此操作不可逆转！",
		alert_forget_wifi_title: "删除Wifi",
		alert_forget_wifi_body:
			"断开并删除当前Wifi将使StellarMate启用自己的热点（如果未连接到以太网）。您将需要连接到此热点才能继续使用。是否继续？",
		alert_join_wifi_title: "加入Wifi网络",
		alert_join_wifi_body:
			"加入Wifi网络将关闭StellarMate的热点（如果已启动）。若继续使用StellarMate，请确保您在同一网络上。是否继续？",
		alert_change_resolution_title: "成功!",
		alert_change_resolution_body: "您现在可以重启StellarMate令变更生效",
		alert_change_release_title: "测试频道",
		alert_change_release_body: "您确定要切换到不稳定且不受支持的测试版渠道吗？",
		alert_direct_ethernet_title: "直连以太网",
		alert_direct_ethernet_connect_body:
			"将以太网电缆直接连接到StellarMate和您的PC之间。将您的PC的IP地址设置为192.168.100.2，网关设置为192.168.100.1。",
		alert_direct_ethernet_disconnect_body: "断开直连以太网电缆。",
		alert_clear_all_driver_config_title: "清除所有驱动程序配置",
		alert_clear_all_driver_config_body: "您确定要删除所有驱动程序配置吗？",
		alert_update_complete_title: "SM操作系统更新",
		alert_update_complete_body: "更新完成，请重新启动StellarMate。",
		alert_network_error_title: "网络错误",
		alert_network_error_body: "无法查询网络信息",
		alert_delete_directory_message: "您要删除{0}目录及其下所有文件吗？",
		alert_permission_title: "位置权限",
		alert_permission_description:
			"StellarMate App需要位置信息以将StellarMate小工具位置与App位置同步。您要继续吗？",
		alert_remote_isactive:
			"无法检查远程支持是否激活，您的Stellarmate OS是否已经更新？",
		alert_remote_start: "无法启动远程支持：",
		alert_remote_stop: "无法停止远程支持：",
		alert_remote_id: "无法找到远程支持ID",
		alert_remote_failed: "无法获取远程支持ID：",
		alert_remote_not_found: "未发现远程支持：",
		alert_permission_denied: "权限被拒绝",
		alert_permission_blocked: "权限被阻止",
		alert_grant_camera_permission: "您需要首先给予相机权限",
		alert_feature_not_available: "此功能不可用",

		alert_logout_account_body: "你确定要注销吗？",
		alert_reset_ekoslive_title: "重置Ekoslive",
		alert_reset_ekoslive_body:
			"你确定要重置Ekoslive吗？这将删除所有缓存的映像并重新启动服务器。",
		alert_download_index_file: "缺少Astrometry解析文件。是否要下载？",

		change_resolution_modal: {
			mode: "模式",
		},
		change_hostname_modal: {
			new_hostname: "新主机名",
		},
		change_wifi_modal: {
			heading: "加入网络",
			ssid: "SSID",
			err_wifi: "搜寻Wifi时遇到了问题，请重试",
		},
		change_band_modal: {
			heading: "修改带宽",
			band: "带宽",
			channel: "信道",
		},
		vnc_view: {
			heading: "远程桌面(VNC)",
			alert_unreachable_title: "VNC 无法访问",
			alert_unreachable_body: "尝试连接VNC服务器时似乎遇到了问题，请重试",
		},
		web_manager_view: {
			alert_unreachable_title: "网页客户端无法访问",
			alert_unreachable_body: "尝试连接网页客户端时似乎遇到了问题，请重试",
		},
	},
	settings: {
		heading: "设置",
		language: "语言",
		high_bandwidth: "高带宽模式",
		transfer_images: "传输图像",
		notifications: "通知",
		sounds: "声音",
		cloud_storage: "云存储",
		auto_sync: "自动同步",
		location: "位置",
		reset_app: "重置App",
		reset_app_body: "清除所有应用程序设置？",
		metric: "公制",
		imperial: "英制",
		file_logging: "文件日志记录",
		alert_delete_account_title: "删除账号",
		alert_delete_account_body: "你确定要删除你的帐户吗？",
		color_scheme_sky_map: "星图规划",
	},
	cloud: {
		heading: "云服务",
		btn_filters: "筛选",
		btn_gallery: "图库",
		btn_offline_viewer: "离线查看器",
		btn_cloud_viewer: "云端查看器",
		no_images_title: "找不到图像",
		no_images_body: "请尝试更改筛选条件",
		no_selected_title: "没有选择图像",
		no_selected_body: "从图库中选择一张图片",
		cloud_disabled_title: "云服务已禁用",
		cloud_disabled_body: "请转到设置并启用云服务以访问此选项卡",
		pro_plan_body: "云存储仅适用于高级用户",
		reset_ekoslive: "重置Ekoslive",
		alert_cannot_download_title: "无法下载",
		alert_cannot_download_body: "尝试下载时出错，请重试",
		alert_confirm_delete_title: "是否确定?",
		alert_confirm_delete_body: "真的要删除{0}吗？删除后数据将无法恢复",
		filters_drawer: {
			field: "域",
			condition: "条件",
			value: "值",
			btn_add_filter: "添加筛选条件",
			airmass: "大气光学质量",
			object: "对象",
			contains: "包含",
		},
		gallery_drawer: {
			all: "全部",
			h1: "1h",
			h24: "1d",
			d7: "7d",
			m1: "1m",
			y1: "1y",
			images: "图像",
			btn_sort: "分类",
			btn_delete_all: "全部删除",
			ascending: "升序",
			descending: "降序",
			alert_no_images_title: "无图像",
			alert_no_images_body: "没有可以删除的图像",
			alert_delete_all_body: "确定删除选定的 {0} 张图片吗? 此操作无法恢复",
			transfer_successful: "Image transfer is successful"
		},
		info_drawer: {
			add_tags_here: "在这里添加标签",
			captured_on: "已捕获",
		},
	},
	about: {
		heading: "关于",
		bundle: "软件包",
		copyright_line1: "StellarMate由Ikarus Technologies开发。© 2017-2024",
		copyright_line2: "背景来自Alamri天文台",
		credits: {
			heading: "感谢",
			title: "翻译",
			name: "翻译者",
		},
	},
	messages: {
		polar_idle:
			"此工具提供了一种简单的方法来极轴对准。将您的望远镜指向天顶极Home位置，做好平衡。选择合适的方向和速度，然后点击开始。如果您无法看到北极星，请使用SkyMap或Ekos望远镜控制器在近子午线附近的任何地方调整，选择东或西方的方向，必要时降低旋转角度，并单击“开始”。",
		alert_directions_not_found: "未找到坐标，请选定目标并手动输入坐标。",
		manual_rotator: "按指示角度旋转相机，然后拍摄图像以更新位置角度",
		welcome: "欢迎使用StellarMate",
		no_logs: "No {0} logs found"
	},
	ekosLivePro: {
		pushNotification: "推送通知",
		level: "通知级别",
		settings: "EkosLive Pro设置",
	},
	skymap: {
		goto: "Goto",
	},
	scheduler_settings: {
		lead_time: "任务间最短间隔",
		lead_time_tooltip:
			"任务之间的最短时间（以分钟为单位）。在该提前期之前计划启动作业，以确保序列在开始之前有足够的时间进行自动对焦和导星调整。",
		pre_dawn: "黎明前限制",
		pre_dawn_tooltip: "不要在黎明前超过这么多分钟安排或执行作业。",
		pre_emptive: "先发制人的停机",
		pre_emptive_tooltip:
			"如果在这么多小时内没有安排序列任务，请执行完整的关闭过程，并在下一个任务准备就绪后重新启动天文台操作。",
		setting_altitude: "设置高度截止",
		setting_altitude_tooltip:
			"在低于这么多度的位置不允许安排任务。实际执行将一直持续到达到高度限制。",
		dust_offset: "黄昏偏置",
		dust_offset_tooltip:
			"用这么多小时抵消天文黄昏。通过调整此参数的正负值，可以微调微光限制。",
		dawn_offset: "黎明偏置",
		dawn_offset_tooltip:
			"用这么多小时抵消天文黎明。通过调整此参数的正负值，可以微调微光限制。",

		stop_ekos: "关闭后停止Ekos",
		stop_ekos_tooltip: "成功执行关闭过程后，停止INDI和Ekos。",
		shutdown_script: "关闭脚本终止INDI",
		shutdown_script_tooltip:
			"如果关闭脚本终止INDI服务器，请启用此选项以防止出现断开连接错误。",
		remember_job: "记住作业进度",
		remember_job_tooltip: "在处理预定作业时，从上次存储的图像位置开始恢复序列。",

		reset_mount: "对准失败时重置赤道仪模型",
		reset_mount_tooltip: "当对准失败时，重置赤道仪模型。",
		reset_mount_before: "在每个作业开始前重置赤道仪模型",
		reset_mount_before_tooltip: "在每个作业开始之前重置赤道仪模型。",
		force_realign: "重新启动作业前强制重新对准",
		force_realign_tooltip:
			"如果启用了对准功能，则调度程序会在重新启动任何作业之前进行重新对准，即使导星也处于活动状态。",
		restart_align: "导星校准失败时重新开始对准",
		restart_align_tooltip:
			"如果导星校准失败，则重新启动对准过程，然后再继续导星重新校准过程。这可以帮助重新将目标物体居中，以防校准过程偏离目标物体的视场。",

		offsets: "偏移量",
		clean_jobs: "清理和作业",
		alignment: "对准",

		verify_image: "定期验证捕获图像位置",
		verify_image_tooltip:
			"在拍摄后，每隔N张图像计算一次位置。将此参数设置为0表示禁用。",
		reset_pipeline: "如果验证的图像位置超出设定值，则重置流程",
		reset_pipeline_tooltip:
			"如果捕获的位置超过目标位置这么多角分钟，终止捕获并重新安排流程。",
		arcminutes: "角分",
	},

	device: {
		mirror: "镜像外部显示器",
		monitor_successful: "StellarMate 监视器显示设置成功更改！",
		monitor_failed: "无法设置SM X 监视器显示。请稍后再试！",
		undefined_error: "错误未定义",
		share: "分享日志",
		logs: "日志",
		logs_upload: "日志成功上传至StellarMate支持。",
		error_upload: "上传日志时出错",
		reset_network: "重置网络",

		vnc: {
			update_password: "更新VNC密码",
			scaling: "Scaling",
		},
	},

	controller: {
		dc_power: "12V 直流电源",
		heaters: "加热器",
		varOutput: "可变输出",
		reports: "报告",
		voltage: "电压",
		current: "电流",
		power: "功率",
		power_sleep: "电源处于睡眠模式。点击唤醒。",
		power_off: "关机",
		power_off_tooltip: "断开设备配置文件时，关闭所有端口的电源。",
		leds: "LED 灯",
		auto_dew: "自动防露",
		auto_dew1_threshold: "加热器 1 阈值",
		auto_dew2_threshold: "加热器 2 阈值",
		stepper: "步进电机",
		buzzer: "蜂鸣器",
		sensors: "传感器",
		alert_power_port_description: "您确定要关闭 {0} 吗？",
	},
	notifications: {
		ekoslive_successful: "Ekoslive重置成功",
		ekoslive_restart: "重启Ekoslive",
        usb_reset: "USB reset is successful"
	},
	hardware: {
		serial_devices_detected: "发现串口设备",
		serial_port: "串口",
	},
    tabs: {
        setup: "Setup",
        ekos: "Ekos",
        sky: "Sky",
        targets: "Targets",
		device: "Device",
		stella: "Stella"
    },
	stella: 
	{
		confirm: "Confirm Response",
		narrate: "Narrate Response",
		notifications: {
			objects: "Stella has found some interesting objects!✅",
			failed: "Stella didn't find anything this time. Could you try widening your search criteria or adjusting the filters?"
		},

		targets:
		{
			example: "Filter targets with Stella AI. Here are some examples:",
			galaxies: "1. Find all galaxies above 30 degrees at the North",
			nebulae: "2. Find all nebulae that are between 1 and 3 degrees",
			comets: "3. Find all comets above 40 degrees and I can observe with my camera"
		},
		view:
		{
			example: "Filter images with Stella AI. Here are some examples:",
			filter: "1. Filter images with Red filter",
			show_images: "2. Show me images that I took May 25",
			show_messier: "3. Show me M 31 images"
		}
	}
};

export default cn;
