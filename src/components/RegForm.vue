<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-row>
        <b-col cols="6">
          <b-form-group id="email"
                        label="Email address"
                        label-for="email">
            <b-form-input id="email"
                          type="email"
                          v-model="regForm.email"
                          required
                          placeholder="youremail@domain.com">
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="6">
          <b-form-group id="password"
                        label="Password"
                        label-for="password">
            <b-form-input id="password"
                          type="password"
                          v-model="regForm.password"
                          required>
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="6">
          <b-form-group id="passwordRedo"
                        label="Please, repeat password"
                        label-for="passwordRedo">
            <b-form-input id="passwordRedo"
                          type="password"
                          v-model="regForm.passwordRepeat"
                          required>
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="6">
          <b-form-group id="srcInfoAboutFrom"
                        label="How did you hear about us?"
                        label-for="srcInfoAboutFrom">
            <b-form-select id="srcInfoAboutFrom"
                           :options="srcInfoAboutFrom"
                           required
                           v-model="regForm.srcInfoAboutFrom">
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-form-row>
      <div class="note-with-icon">
        <i class="fa fa-info-circle"></i>
        <p>We care about your data. Therefore and according to EU rules, we need your consent below.</p>
      </div>
      <div class="agreement-part">
        <h6 class="h6">Storage of personal data</h6>
        <b-form-row>
          <b-col cols="3">
            <b-button variant="outline-secondary" v-b-modal="'userAcceptanceModal_1'">Read the document</b-button>
          </b-col>
          <b-col cols="9">
            <b-form-checkbox id="userAcceptance_1"
                             v-model="regForm.checked"
                             value="accepted"
                             unchecked-value="not_accepted">
              I've read the above text and agree to it
            </b-form-checkbox>
          </b-col>
        </b-form-row>
      </div>
      <div class="agreement-part">
        <h6 class="h6">Permission for transfer of the CV data</h6>
        <b-form-row>
          <b-col cols="3">
            <b-button variant="outline-secondary" v-b-modal="'userAcceptanceModal_1'">Read the document</b-button>
          </b-col>
          <b-col cols="9">
            <b-form-checkbox id="userAcceptance_2"
                             v-model="regForm.checked"
                             value="accepted"
                             unchecked-value="not_accepted">
              I've read the above text and agree to it
            </b-form-checkbox>
          </b-col>
        </b-form-row>
      </div>
      <div class="agreement-part">
        <h6 class="h6">Permission for taking contact with job offers or feedbacks</h6>
        <b-form-row>
          <b-col cols="3">
            <b-button variant="outline-secondary" v-b-modal="'userAcceptanceModal_1'">Read the document</b-button>
          </b-col>
          <b-col cols="9">
            <b-form-checkbox id="userAcceptance_3"
                             v-model="regForm.checked"
                             value="accepted"
                             unchecked-value="not_accepted">
              I've read the above text and agree to it
            </b-form-checkbox>
          </b-col>
        </b-form-row>
      </div>
      <div class="agreement-part">
        <h6 class="h6">Permission for transfer of your data to payment operator</h6>
        <b-form-row>
          <b-col cols="3">
            <b-button variant="outline-secondary" v-b-modal="'userAcceptanceModal_1'">Read the document</b-button>
          </b-col>
          <b-col cols="9">
            <b-form-checkbox id="userAcceptance_4"
                             v-model="regForm.checked"
                             value="accepted"
                             unchecked-value="not_accepted">
              I've read the above text and agree to it
            </b-form-checkbox>
          </b-col>
        </b-form-row>
      </div>
      <div class="agreement-part">
        <h6 class="h6">Acceptance of service conditions and privacy policy</h6>
        <b-form-row>
          <b-col cols="3">
            <b-button variant="outline-secondary" v-b-modal="'userAcceptanceModal_1'">Read the document</b-button>
          </b-col>
          <b-col cols="9">
            <b-form-checkbox id="userAcceptance_5"
                             v-model="regForm.checked"
                             value="accepted"
                             unchecked-value="not_accepted">
              I've read the above text and agree to it
            </b-form-checkbox>
          </b-col>
        </b-form-row>
      </div>
      <b-button disabled variant="primary">Continue</b-button>
    </b-form>

    <!-- Modal example -->
    <b-modal id="userAcceptanceModal_1"
             size="lg"
             title="Storage of personal data">
        <!-- Start of the template doc content -->
        <p>This privacy policy describes the privacy practices for the Web sites operated by Drive.Net, Inc. («DRIVE.NET») (hereinafter «Web site» if singular, or, «Web sites» if more than one DRIVE.NET site is referred to).</p>
        <h6 class="h6">1. Info collection and use</h6>

        <p>We gather two types of information:</p>

        <ul class="list">
            <li>
                (1) personally identifiable information that you supply voluntarily when you register for interactive services, order other products or services, or
                enter certain other areas of our Web sites as noted below in this Privacy Policy
            </li>
            <li>
                (2) aggregate tracking and site usage information that we gather automatically as you access our Web sites.
            </li>
        </ul>

        <p>
            Your provision to us of any information through our Web sites, or through other sites that link to our Web sites, is deemed your agreement to this
            Privacy Policy. It is our policy to use the personally identifiable information we acquire at our Web sites for internal business uses only and to
            provide content, products and services to you that you value and request.
        </p>
        <p>
            We do not authorize the use of your personal information by any third party (other than DRIVE.NET business services providers discussed in the next
            section or, under exceptional conditions as described under «Legal Matters» below). We operate and maintain a variety of online security measures to
            safeguard and keep your information private.
        </p>
        <h6 class="h6">
            Personally Identifiable Information You Provide to Us
        </h6>
        <p>
            Anyone can access our Web sites, but there are certain areas and services that require registration or provision of certain personal information if
            accessed, such as by way of example: entering premium content areas, placing advertisements online and making other online purchases, signing up for
            e-mail newsletters, promotions, contests, sweepstakes or special offers, or participating in reader forums, message boards, chats and reader surveys.
        </p>
        <!-- /end -->
    </b-modal>
  </div>
</template>

<script>
    export default {
        name: 'regForm',
        data () {
            return {
                regForm: {
                    email: '',
                    password: '',
                    passwordRepeat: '',
                    srcInfoAboutFrom: null,
                    checked: []
                },
                srcInfoAboutFrom: [
                    { text: 'Please, choose...', value: null },
                    'Social media', 'Ads in the Internet', 'From my friend / mate', 'At the event'
                ],
                show: true
            }
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
        }
    }
</script>

<!-- b-form-1.vue -->