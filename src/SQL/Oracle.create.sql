



CREATE TABLE "ТчПрограм"
(

	"primaryKey" RAW(16) NOT NULL,

	"Режим" RAW(16) NOT NULL,

	"Отчет_m0" RAW(16) NULL,

	"Отчет_m1" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Вода"
(

	"primaryKey" RAW(16) NOT NULL,

	"Вода" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СписокПрограм"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сбои"
(

	"primaryKey" RAW(16) NOT NULL,

	"Время" DATE NULL,

	"Ошибка" NVARCHAR2(11) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Время"
(

	"primaryKey" RAW(16) NOT NULL,

	"Время" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Кондер"
(

	"primaryKey" RAW(16) NOT NULL,

	"Кондицион" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Режим"
(

	"primaryKey" RAW(16) NOT NULL,

	"Название" NVARCHAR2(255) NULL,

	"МоющееСред" RAW(16) NOT NULL,

	"температуры" RAW(16) NOT NULL,

	"Кондер" RAW(16) NOT NULL,

	"Вода" RAW(16) NOT NULL,

	"Время" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Отчет"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "МоющееСред"
(

	"primaryKey" RAW(16) NOT NULL,

	"Моющее" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "температуры"
(

	"primaryKey" RAW(16) NOT NULL,

	"Температура" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ТчПрограм"
	ADD CONSTRAINT "ТчПрограм_FРе_4799" FOREIGN KEY ("Режим") REFERENCES "Режим" ("primaryKey");

CREATE INDEX "ТчПрограм_IРежим" on "ТчПрограм" ("Режим");

ALTER TABLE "ТчПрограм"
	ADD CONSTRAINT "ТчПрограм_FОт_6037" FOREIGN KEY ("Отчет_m0") REFERENCES "Отчет" ("primaryKey");

CREATE INDEX "ТчПрограм_IОт_3032" on "ТчПрограм" ("Отчет_m0");

ALTER TABLE "ТчПрограм"
	ADD CONSTRAINT "ТчПрограм_FСп_9817" FOREIGN KEY ("Отчет_m1") REFERENCES "СписокПрограм" ("primaryKey");

CREATE INDEX "ТчПрограм_IОт_3033" on "ТчПрограм" ("Отчет_m1");

ALTER TABLE "Режим"
	ADD CONSTRAINT "Режим_FМоющее_8875" FOREIGN KEY ("МоющееСред") REFERENCES "МоющееСред" ("primaryKey");

CREATE INDEX "Режим_IМоющее_1264" on "Режим" ("МоющееСред");

ALTER TABLE "Режим"
	ADD CONSTRAINT "Режим_Fтемпер_7313" FOREIGN KEY ("температуры") REFERENCES "температуры" ("primaryKey");

CREATE INDEX "Режим_Iтемпер_5134" on "Режим" ("температуры");

ALTER TABLE "Режим"
	ADD CONSTRAINT "Режим_FКондер_0" FOREIGN KEY ("Кондер") REFERENCES "Кондер" ("primaryKey");

CREATE INDEX "Режим_IКондер" on "Режим" ("Кондер");

ALTER TABLE "Режим"
	ADD CONSTRAINT "Режим_FВода_0" FOREIGN KEY ("Вода") REFERENCES "Вода" ("primaryKey");

CREATE INDEX "Режим_IВода" on "Режим" ("Вода");

ALTER TABLE "Режим"
	ADD CONSTRAINT "Режим_FВремя_0" FOREIGN KEY ("Время") REFERENCES "Время" ("primaryKey");

CREATE INDEX "Режим_IВремя" on "Режим" ("Время");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


