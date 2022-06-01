var namita = posy;
(function (colby, maclyn) {
  var kinzlee = posy, makena = colby();
  while (true) {
    try {
      var teige = -parseInt(kinzlee(110)) / 1 * (parseInt(kinzlee(141)) / 2) + parseInt(kinzlee(168)) / 3 * (-parseInt(kinzlee(130)) / 4) + -parseInt(kinzlee(169)) / 5 + parseInt(kinzlee(152)) / 6 * (parseInt(kinzlee(143)) / 7) + -parseInt(kinzlee(119)) / 8 + parseInt(kinzlee(173)) / 9 * (-parseInt(kinzlee(181)) / 10) + -parseInt(kinzlee(120)) / 11 * (-parseInt(kinzlee(206)) / 12);
      if (teige === maclyn) break; else makena.push(makena.shift());
    } catch (sametria) {
      makena.push(makena.shift());
    }
  }
}(tavey, 799522));
var path_between_quiz = "", path_main_quiz = "", path_end_quiz = "", path_retry_quiz = "", path_end_effect = "", userMedia = navigator[namita(117)][namita(111)]({audio: true}), timeRespond = 0, elapseSec = 0, quizStatus = 1, answers_yes = ["yes", namita(118), "yeah", namita(205), namita(139)], answers_no = ["no", namita(137), namita(190), "naw", namita(155)], quiz_answers_correct = [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1], betweenSpeech, mainSpeech, endSpeech, retrySpeech, endEffect, quiz_cnt_intro = 1, quiz_cnt_before = 5, quiz_cnt_between = 10, quiz_cnt_main = 12, quiz_cnt_last = 5, quiz_cnt_end_correct = 1, quiz_cnt_end_wrong = 8, quiz_cnt_try_again = 5, quiz_num = 0, quiz_nums_between = [], quiz_nums_main = [], quiz_answers = [-1, -1, -1], quiz_idx = 0, between_main = 1, quiz_retry = 0, loops = 3, loop_idx = 1, puzzle_solved = 0, ansClicked = 0, strQuiz = {intro: "Would you like to play a game?", quiz_main: ["Do lions eat carrots?", namita(174), namita(140), "Has a fox got six legs?", namita(134), namita(115), namita(128), "Do bears meow?", namita(157), namita(200), namita(113), namita(138)], correct: namita(194), wrong: "Oh, no!!!"}, back_img_cnt = 6, noRespond = 0;
function initQuestions() {
  var shylow = namita, panagiota = Math[shylow(109)](Math[shylow(126)]() * back_img_cnt + 1);
  $(shylow(149)).css(shylow(192), shylow(204) + panagiota + shylow(127)), $(shylow(149))[shylow(187)](shylow(201), "100% 100%"), quiz_answers = [-1, -1, -1], ansClicked = 0, puzzle_solved = 0, quiz_idx = 0, quiz_nums_between = [];
  while (quiz_nums_between.length < 1) {
    quiz_num = Math[shylow(109)](Math[shylow(126)]() * quiz_cnt_between + 1);
    if (quiz_nums_between[shylow(191)](quiz_num) === -1) quiz_nums_between[shylow(136)](quiz_num);
  }
  console.log(quiz_nums_between), quiz_nums_main = [];
  while (quiz_nums_main[shylow(198)] < 3) {
    quiz_num = Math.floor(Math[shylow(126)]() * quiz_cnt_main + 1);
    if (quiz_nums_main[shylow(191)](quiz_num) === -1) quiz_nums_main[shylow(136)](quiz_num);
  }
  console.log(quiz_nums_main);
  for (var diaquan = 0; diaquan < 3; diaquan++) console.log(quiz_answers_correct[quiz_nums_main[diaquan] - 1]);
  $("#div_answer_quiz")[shylow(171)](), $(shylow(116))[shylow(171)](), $(shylow(146)).show();
}
function enterQuiz() {
  var kjon = namita;
  $(kjon(146)).hide(), $(kjon(116))[kjon(165)](), path_between_quiz = kjon(112), startQuiz();
}
document[namita(184)]("keypress", function (carlysle) {
  var lancaster = namita;
  carlysle[lancaster(178)] == 13 && quizStatus == 1 && enterQuiz();
}), $("#div_enter_quiz").click(function (marino) {
  enterQuiz();
}), $(namita(188))[namita(186)](function (hatina) {
  ansClicked = 1;
}), $("#btn_no")[namita(186)](function (nyona) {
  ansClicked = 2;
});
function backToEnter() {
  var jissel = namita;
  ansClicked = 0, quizStatus = 1, noRespond = 0, $(jissel(116))[jissel(121)](""), $(jissel(183))[jissel(171)](), $(jissel(116))[jissel(171)](), $(jissel(146))[jissel(165)]();
}
function quizStep1() {
  var abisag = namita;
  $(abisag(116)).html(""), $(abisag(183))[abisag(171)](), quizStatus = 2, ansClicked = 0, quiz_num = Math.floor(Math.random() * quiz_cnt_before + 1), path_between_quiz = abisag(167) + quiz_num + abisag(150), playBetweenSpeech(path_between_quiz), path_main_quiz = abisag(122) + quiz_nums_main[0] + abisag(150), window[abisag(166)]("playMainSpeech(path_main_quiz, 0)", 4e3);
}
function quizStep2_4() {
  var arianni = namita;
  $("#div_quiz_done").html(""), ansClicked = 0, $(arianni(183)).hide(), quizStatus == 4 ? (quiz_num = Math.floor(Math[arianni(126)]() * quiz_cnt_last + 1), path_between_quiz = arianni(197) + quiz_num + arianni(150)) : path_between_quiz = arianni(151) + quiz_nums_between[quiz_idx] + arianni(150), playBetweenSpeech(path_between_quiz), quiz_idx++, path_main_quiz = arianni(122) + quiz_nums_main[quiz_idx] + arianni(150), window[arianni(166)]("playMainSpeech(path_main_quiz, quiz_idx)", 3500);
}
function quizStep5() {
  var haruna = namita;
  $(haruna(116))[haruna(121)](""), ansClicked = 0, $(haruna(183))[haruna(171)](), console[haruna(179)](quiz_answers), quizStatus = 6;
  if (judgeAnswers()) path_end_effect = haruna(145), path_end_quiz = haruna(202), puzzle_solved = 1; else {
    path_end_effect = haruna(175);
    var cayse = Math[haruna(109)](Math[haruna(126)]() * quiz_cnt_end_wrong + 1);
    path_end_quiz = haruna(132) + cayse + haruna(150), puzzle_solved = 0;
  }
  playEndEffect(path_end_effect), window[haruna(166)](haruna(156), 4e3);
}
function startQuiz() {
  var sahiti = namita;
  userMedia[sahiti(164)](lorrine => {
    var aurel = sahiti;
    console[aurel(179)]({stream: lorrine});
    if (!MediaRecorder[aurel(153)](aurel(135))) return alert(aurel(148));
    const rehanna = new MediaRecorder(lorrine, {mimeType: "audio/webm"}), marcel = new WebSocket(aurel(124), [aurel(161), aurel(189)]);
    marcel[aurel(203)] = () => {
      var chasity = aurel;
      console[chasity(179)]({event: chasity(203)}), playBetweenSpeech(path_between_quiz), rehanna[chasity(184)](chasity(172), async edgbert => {
        var megen = chasity;
        edgbert.data[megen(199)] > 0 && marcel[megen(182)] == 1 && marcel[megen(131)](edgbert.data);
      }), rehanna.start(1e3), timeRespond = Date[chasity(154)]();
    }, marcel[aurel(162)] = tully => {
      var calizza = aurel;
      const jovanne = JSON[calizza(142)](tully[calizza(193)]), tip = jovanne[calizza(160)][calizza(180)][0][calizza(196)];
      if (tip && jovanne[calizza(177)]) {
        console[calizza(179)](tip);
        if (quizStatus == 1) {
          if (between_main == 2) {}
          if (endBetweenSpeech()) {
            if (answers_yes[calizza(185)](tip) || containsAnswerYes(tip)) quizStep1(); else {
              if (answers_no[calizza(185)](tip) || containsAnswerNo(tip)) marcel[calizza(159)](), backToEnter(); else {}
            }
          }
        } else {
          if (quizStatus >= 2 && quizStatus <= 4) {
            if (between_main == 1) {}
            if (endMainSpeech()) {
              if (quiz_answers[quiz_idx] == -1) {
                if (answers_yes[calizza(185)](tip) || containsAnswerYes(tip)) quiz_answers[quiz_idx] = 1; else (answers_no.includes(tip) || containsAnswerNo(tip)) && (quiz_answers[quiz_idx] = 0);
                quizStatus <= 4 && ((answers_yes.includes(tip) || containsAnswerYes(tip) || answers_no.includes(tip) || containsAnswerNo(tip)) && quizStep2_4());
              }
            } else {}
          } else {
            if (quizStatus == 5) {
              if (between_main == 1) {}
              if (endMainSpeech()) {
                if (quiz_answers[quiz_idx] == -1) {
                  if (answers_yes[calizza(185)](tip) || containsAnswerYes(tip)) quiz_answers[quiz_idx] = 1; else (answers_no[calizza(185)](tip) || containsAnswerNo(tip)) && (quiz_answers[quiz_idx] = 0);
                  (answers_yes[calizza(185)](tip) || containsAnswerYes(tip) || answers_no[calizza(185)](tip) || containsAnswerNo(tip)) && quizStep5();
                }
              } else {}
            } else {
              if (quizStatus == 6) {
                if (endEndSpeech()) {
                  quizStatus = 7;
                  if (puzzle_solved == 0) {
                    var amythyst = Math[calizza(109)](Math[calizza(126)]() * quiz_cnt_try_again + 1);
                    path_retry_quiz = calizza(176) + amythyst + calizza(150), playRetrySpeech(path_retry_quiz);
                  }
                }
                if (puzzle_solved == 1) {}
              } else quizStatus == 7 && (endRetrySpeech() && puzzle_solved == 0 && (quizStatus = 1, initQuestions()));
            }
          }
        }
      } else {
        if (quizStatus == 1) {
          if (endBetweenSpeech()) {
            if (ansClicked == 1) quizStep1(); else ansClicked == 2 ? (marcel[calizza(159)](), backToEnter()) : (elapseSec = Date[calizza(154)]() - timeRespond, elapseSec >= 1e4 && (marcel[calizza(159)](), backToEnter()));
          }
        } else {
          if (quizStatus >= 2 && quizStatus <= 4) {
            if (endMainSpeech() && quiz_answers[quiz_idx] == -1) {
              if (ansClicked == 1) quiz_answers[quiz_idx] = 1, quizStep2_4(); else ansClicked == 2 ? (quiz_answers[quiz_idx] = 0, quizStep2_4()) : (elapseSec = Date[calizza(154)]() - timeRespond, elapseSec >= 15e3 && (path_end_quiz = calizza(195), noRespond = 1, playEndSpeech(path_end_quiz), marcel[calizza(159)](), backToEnter()));
            }
          } else {
            if (quizStatus == 5) {
              if (endMainSpeech() && quiz_answers[quiz_idx] == -1) {
                if (ansClicked == 1) quiz_answers[quiz_idx] = 1, quizStep5(); else {
                  if (ansClicked == 2) quiz_answers[quiz_idx] = 0, quizStep5(); else {}
                }
              }
            } else {}
          }
        }
      }
    }, marcel[aurel(129)] = () => {
      var jaymya = aurel;
      console[jaymya(179)]({event: "onclose"});
    }, marcel[aurel(170)] = zaliah => {
      var esaias = aurel;
      console[esaias(179)]({event: esaias(170), error: zaliah});
    };
  });
}
function playBetweenSpeech(shanquia) {
  var teaerra = namita;
  betweenSpeech = new Audio(shanquia), betweenSpeech[teaerra(114)](), quizStatus == 1 && ($("#div_quiz_done")[teaerra(121)](strQuiz[teaerra(147)]), $(teaerra(116))[teaerra(133)]({delay: 50, extra_char: "", trim: true, callback: null})), betweenSpeech[teaerra(184)](teaerra(158), function () {
    var usher = teaerra;
    quizStatus == 1 && $("#div_answer_quiz")[usher(165)](), between_main = 2;
  });
}
function playMainSpeech(eniola, derricka) {
  var jaileene = namita;
  mainSpeech = new Audio(eniola), mainSpeech[jaileene(114)](), $(jaileene(116))[jaileene(121)](strQuiz[jaileene(163)][quiz_nums_main[derricka] - 1]), $(jaileene(116))[jaileene(133)]({delay: 50, extra_char: "", trim: true, callback: null}), mainSpeech[jaileene(184)](jaileene(158), function () {
    var dami = jaileene;
    between_main = 1, quizStatus++, timeRespond = Date[dami(154)](), $(dami(183)).show();
  });
}
function endBetweenSpeech() {
  var tamaran = namita;
  if (betweenSpeech) return betweenSpeech[tamaran(158)];
  return false;
}
function endMainSpeech() {
  var michall = namita;
  if (mainSpeech) return mainSpeech[michall(158)];
  return false;
}
function playEndSpeech(lachaundra) {
  var chakka = namita;
  console[chakka(179)](quizStatus), endSpeech = new Audio(lachaundra), endSpeech[chakka(114)]();
  if (puzzle_solved) $(chakka(116))[chakka(121)](strQuiz[chakka(123)]), $("#div_quiz_done")[chakka(133)]({delay: 150, extra_char: "", trim: true, callback: null}); else {}
}
function tavey() {
  var micharl = ["Can magpie perch on clouds in the sky?", "play", "Is Washington DC the capital of the United States?", "#div_quiz_done", "mediaDevices", "yup", "8643728GrjTQq", "187YVjZkw", "html", "./audio/quiz-1-3/quiz-1-3-", "correct", "wss://api.deepgram.com/v1/listen", "currentTime", "random", '.jpg")', "Do alligators fly?", "onclose", "103084AvyjTP", "send", "./audio/quiz-end/quiz-end-wrong-", "typewrite", "Can a duck quack?", "audio/webm", "push", "nada", "Are cats the cleanest animals?", "that's right", "Is a zebra a pet?", "2xMRxRI", "parse", "301EQZcSF", "endsWith", "./audio/quiz-end/quiz-end-correct-effect.wav", "#div_enter_quiz", "intro", "Browser not supported", "body", ".mp3", "./audio/between-quiz-2-4/between-quiz-2-4-", "6660LJrsWY", "isTypeSupported", "now", "gnaw", "playEndSpeech(path_end_quiz)", "Is June a summer month?", "ended", "close", "channel", "token", "onmessage", "quiz_main", "then", "show", "setTimeout", "./audio/before-quiz/quiz-start-", "183YQnTnT", "349365byEQRM", "onerror", "hide", "dataavailable", "8530614Esoynh", "Do elephants live in the Arctic?", "./audio/quiz-end/quiz-end-wrong-effect.wav", "./audio/try-again/try-again-", "is_final", "keyCode", "log", "alternatives", "10TaHDtG", "readyState", "#div_answer_quiz", "addEventListener", "includes", "click", "css", "#btn_yes", "1989ae1142a515f3fa34447a0c2588f7c1c7ab98", "nope", "indexOf", "background", "data", "Congratulations! You solved the puzzle. Code one nine five eight seven. That is one nine five eight seven.", "./audio/intro/no-response.mp3", "transcript", "./audio/last-quiz/last-quiz-", "length", "size", "Has a spaceship ever been to the moon?", "background-size", "./audio/quiz-end/quiz-end-correct.mp3", "onopen", 'url("images/back0', "yea", "3447624uRBWLS", "floor", "462126vWAdaJ", "getUserMedia", "./audio/intro/intro.mp3"];
  tavey = function () {
    return micharl;
  };
  return tavey();
}
function playRetrySpeech(kelana) {
  retrySpeech = new Audio(kelana), retrySpeech.play();
}
function endEndSpeech() {
  var namit = namita;
  if (endSpeech) return endSpeech[namit(158)];
  return false;
}
function posy(laython, tarius) {
  var etoya = tavey();
  return posy = function (cherryl, muhannad) {
    cherryl = cherryl - 109;
    var rosaelena = etoya[cherryl];
    return rosaelena;
  }, posy(laython, tarius);
}
function endRetrySpeech() {
  var zowee = namita;
  if (retrySpeech) return retrySpeech[zowee(158)];
  return false;
}
function playEndEffect(taj) {
  var anisjon = namita;
  endEffect = new Audio(taj), endEffect[anisjon(114)](), endEffect[anisjon(184)](anisjon(158), function () {
    var kalene = anisjon;
    loop_idx < loops ? (this[kalene(125)] = 0, this[kalene(114)](), loop_idx++) : loop_idx = 0;
  }, false);
}
function endEndEffect() {
  if (endEffect) return endEffect.ended;
  return false;
}
function containsAnswerYes(raenah) {
  var deonsha = namita;
  for (var georgiaann = 0; georgiaann < answers_yes[deonsha(198)]; georgiaann++) {
    if (raenah[deonsha(144)](answers_yes[georgiaann])) return 1;
  }
  return 0;
}
function containsAnswerNo(serrina) {
  var irissa = namita;
  for (var tarae = 0; tarae < answers_no[irissa(198)]; tarae++) {
    if (serrina[irissa(144)](answers_no[tarae])) return 1;
  }
  return 0;
}
function judgeAnswers() {
  for (var chantis = 0; chantis < 3; chantis++) {
    if (quiz_answers[chantis] != quiz_answers_correct[quiz_nums_main[chantis] - 1]) return false;
  }
  return true;
}
initQuestions();
