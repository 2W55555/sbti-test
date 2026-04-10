/**
 * SBTI 人格测试 - 主逻辑文件
 * 实现左右分栏答题、进度追踪、结果计算等功能
 * 原作者：B站UP主"蛆肉儿串儿"(UID: 417038183)
 */

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const pages = {
        home: document.getElementById('home-page'),
        test: document.getElementById('test-page'),
        result: document.getElementById('result-page')
    };

    const elements = {
        startBtn: document.getElementById('start-btn'),
        progressFill: document.getElementById('progress-fill'),
        currentNum: document.getElementById('current-num'),
        totalNum: document.getElementById('total-num'),
        leftContent: document.getElementById('left-content'),
        rightContent: document.getElementById('right-content'),
        currentQuestion: document.getElementById('current-question'),
        prevBtn: document.getElementById('prev-btn'),
        nextBtn: document.getElementById('next-btn'),
        submitBtn: document.getElementById('submit-btn'),
        resultType: document.getElementById('result-type'),
        matchPercent: document.getElementById('match-percent'),
        systemNote: document.getElementById('system-note'),
        interpretationText: document.getElementById('interpretation-text'),
        dimensionsGrid: document.getElementById('dimensions-grid'),
        shareBtn: document.getElementById('share-btn'),
        copyBtn: document.getElementById('copy-btn'),
        restartBtn: document.getElementById('restart-btn')
    };

    // 测试状态
    const state = {
        currentIndex: 0,
        answers: {},
        scores: {}
    };

    // 获取问题数据
    const { QUESTIONS, DIMENSIONS, PERSONALITY_TYPES } = window.SBTI_DATA;

    // 切换页面函数
    function showPage(pageName) {
        Object.values(pages).forEach(page => page.classList.remove('active'));
        pages[pageName].classList.add('active');
    }

    // 初始化测试
    function initTest() {
        state.currentIndex = 0;
        state.answers = {};
        state.scores = {};
        elements.totalNum.textContent = QUESTIONS.length;
        updateUI();
        showPage('test');
    }

    // 更新UI
    function updateUI() {
        const currentQ = QUESTIONS[state.currentIndex];
        const progress = (state.currentIndex / QUESTIONS.length) * 100;
        
        // 更新进度
        elements.progressFill.style.width = progress + '%';
        elements.currentNum.textContent = state.currentIndex;
        
        // 更新左右栏预览
        updateSidePanels();
        
        // 更新当前题目
        renderCurrentQuestion(currentQ);
        
        // 更新按钮状态
        updateNavigationButtons();
        
        // 检查是否完成所有题目
        if (state.currentIndex === QUESTIONS.length - 1 && Object.keys(state.answers).length === QUESTIONS.length) {
            elements.submitBtn.style.display = 'block';
        } else {
            elements.submitBtn.style.display = 'none';
        }
    }

    // 更新左右栏预览
    function updateSidePanels() {
        // 左侧：上一题
        if (state.currentIndex > 0) {
            const prevQ = QUESTIONS[state.currentIndex - 1];
            const prevAnswer = state.answers[prevQ.id];
            
            let optionsHtml = prevQ.options.map(opt => 
                '<div class="side-option ' + (opt.label === prevAnswer ? 'selected' : '') + '">' + 
                opt.label + '. ' + opt.text + '</div>'
            ).join('');
            
            elements.leftContent.innerHTML = 
                '<div class="side-question-num">第' + prevQ.id + '题</div>' +
                '<div class="side-question-text">' + prevQ.question + '</div>' +
                '<div class="side-options">' + optionsHtml + '</div>';
            elements.leftContent.classList.remove('disabled');
        } else {
            elements.leftContent.innerHTML = 
                '<div class="side-placeholder">' +
                '<span class="arrow">←</span>' +
                '<p>这里是上一题</p></div>';
            elements.leftContent.classList.add('disabled');
        }
        
        // 右侧：下一题
        if (state.currentIndex < QUESTIONS.length - 1) {
            const nextQ = QUESTIONS[state.currentIndex + 1];
            elements.rightContent.innerHTML = 
                '<div class="side-question-num">第' + nextQ.id + '题</div>' +
                '<div class="side-question-text">' + nextQ.question + '</div>';
            elements.rightContent.classList.remove('disabled');
        } else {
            elements.rightContent.innerHTML = 
                '<div class="side-placeholder">' +
                '<p>最后一题</p>' +
                '<span class="arrow">→</span></div>';
            elements.rightContent.classList.add('disabled');
        }
    }

    // 渲染当前题目
    function renderCurrentQuestion(question) {
        const selectedAnswer = state.answers[question.id];
        
        let optionsHtml = question.options.map(opt => 
            '<div class="option ' + (opt.label === selectedAnswer ? 'selected' : '') + '" ' +
            'data-label="' + opt.label + '" data-question-id="' + question.id + '">' +
            '<div class="option-radio"></div>' +
            '<span class="option-label">' + opt.label + '</span>' +
            '<span class="option-text">' + opt.text + '</span></div>'
        ).join('');
        
        elements.currentQuestion.innerHTML = 
            '<div class="question-header">' +
            '<span class="question-num">第' + question.id + '题</span>' +
            '<span class="question-dimension">维度已隐藏</span></div>' +
            '<div class="question-text">' + question.question + '</div>' +
            '<div class="options-container">' + optionsHtml + '</div>';
        
        // 绑定选项点击事件
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', handleOptionClick);
        });
        
        // 添加动画
        elements.currentQuestion.classList.add('slide-left');
        setTimeout(() => {
            elements.currentQuestion.classList.remove('slide-left');
        }, 300);
    }

    // 处理选项点击
    function handleOptionClick(e) {
        const option = e.currentTarget;
        const label = option.dataset.label;
        const questionId = parseInt(option.dataset.questionId);
        
        // 更新答案
        state.answers[questionId] = label;
        
        // 更新分数
        const question = QUESTIONS.find(q => q.id === questionId);
        if (question && question.scores && question.scores[label]) {
            Object.entries(question.scores[label]).forEach(([dim, score]) => {
                state.scores[dim] = (state.scores[dim] || 0) + score;
            });
        }
        
        // 更新样式
        option.parentElement.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        option.classList.add('selected');
        
        // 自动切换到下一题
        setTimeout(() => {
            if (state.currentIndex < QUESTIONS.length - 1) {
                state.currentIndex++;
                updateUI();
            } else if (Object.keys(state.answers).length === QUESTIONS.length) {
                elements.submitBtn.style.display = 'block';
            }
        }, 300);
    }

    // 更新导航按钮状态
    function updateNavigationButtons() {
        elements.prevBtn.disabled = state.currentIndex === 0;
        elements.prevBtn.style.opacity = state.currentIndex === 0 ? '0.5' : '1';
        
        if (state.currentIndex === QUESTIONS.length - 1) {
            elements.nextBtn.style.display = 'none';
        } else {
            elements.nextBtn.style.display = 'block';
        }
    }

    // 计算结果 - 基于 Manhattan 距离的人格匹配算法
    function calculateResult() {
        const dimensionScores = {};
        Object.keys(DIMENSIONS).forEach(dim => {
            dimensionScores[dim] = state.scores[dim] || 0;
        });
        
        // 计算每个人格类型的匹配度
        let bestMatch = null;
        let highestMatchScore = -Infinity;
        
        PERSONALITY_TYPES.forEach(type => {
            let matchScore = 0;
            let matchedDimensions = 0;
            
            // 计算与该人格各维度的匹配程度
            Object.entries(type.minScores).forEach(([dim, requiredScore]) => {
                const userScore = dimensionScores[dim] || 0;
                
                // 使用 Manhattan 距离计算匹配度
                // 维度越高要求越高，如果用户得分接近或超过要求，则匹配
                if (userScore >= requiredScore * 0.5) {
                    // 基础匹配分
                    matchScore += Math.min(userScore, requiredScore);
                    matchedDimensions++;
                } else if (userScore > 0) {
                    // 部分匹配
                    matchScore += userScore * 0.3;
                }
            });
            
            // 根据匹配维度数量加权
            const dimensionWeight = matchedDimensions / Object.keys(type.minScores).length;
            matchScore = matchScore * (0.5 + dimensionWeight * 0.5);
            
            // 添加一点随机性（模拟原版的半随机特性）
            matchScore += Math.random() * 10;
            
            if (matchScore > highestMatchScore) {
                highestMatchScore = matchScore;
                bestMatch = { ...type, matchScore };
            }
        });
        
        // 计算匹配百分比
        const maxPossibleScore = 30;
        const matchPercent = Math.min(99, Math.round((highestMatchScore / maxPossibleScore) * 100 + 60));
        
        return {
            type: bestMatch || PERSONALITY_TYPES[0],
            matchPercent,
            dimensionScores
        };
    }

    // 显示结果
    function showResult() {
        const result = calculateResult();
        
        // 显示结果类型（包含emoji）
        elements.resultType.textContent = result.type.name + ' ' + (result.type.emoji || '');
        elements.matchPercent.textContent = result.matchPercent;
        elements.systemNote.textContent = result.type.systemNote;
        elements.interpretationText.textContent = result.type.description;
        
        renderDimensionScores(result.dimensionScores);
        
        window.currentResult = result;
        showPage('result');
    }

    // 渲染维度评分
    function renderDimensionScores(scores) {
        const sortedDims = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 15);
        
        const maxScore = Math.max(...sortedDims.map(d => Math.abs(d[1])), 1);
        
        let html = '';
        sortedDims.forEach(([dim, score]) => {
            const dimInfo = DIMENSIONS[dim] || { name: dim, emoji: '' };
            const percent = Math.min(100, Math.abs(score) / maxScore * 100);
            const isHigh = score > 0;
            
            // 根据分数判断等级：L(低)、M(中)、H(高)
            let level = 'L';
            if (Math.abs(score) >= maxScore * 0.6) {
                level = 'H';
            } else if (Math.abs(score) >= maxScore * 0.3) {
                level = 'M';
            }
            
            html += 
                '<div class="dimension-item">' +
                '<div class="dimension-name">' + dimInfo.emoji + ' ' + dimInfo.name + '</div>' +
                '<div class="dimension-bar">' +
                '<div class="dimension-fill ' + (isHigh ? 'high' : 'low') + '" style="width: ' + percent + '%"></div></div>' +
                '<div class="dimension-value">' + level + ' ' + Math.abs(Math.round(score * 10) / 10) + '</div></div>';
        });
        
        elements.dimensionsGrid.innerHTML = html;
    }

    // 分享结果
    function shareResult() {
        const result = window.currentResult;
        if (!result) return;
        
        const shareText = '我在SBTI人格测试中被判定为「' + result.type.name + '」！\n匹配度：' + result.matchPercent + '%\n\n' + result.type.description + '\n\n快来测试一下你是哪种吧！🔗 https://sbti.one/';
        
        if (navigator.share) {
            navigator.share({
                title: 'SBTI 人格测试',
                text: shareText
            }).catch(() => {
                copyToClipboard(shareText);
            });
        } else {
            copyToClipboard(shareText);
            alert('结果已复制到剪贴板！');
        }
    }

    // 复制到剪贴板
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        });
    }

    // 绑定事件
    elements.startBtn.addEventListener('click', initTest);
    
    elements.prevBtn.addEventListener('click', () => {
        if (state.currentIndex > 0) {
            state.currentIndex--;
            updateUI();
        }
    });
    
    elements.nextBtn.addEventListener('click', () => {
        if (state.currentIndex < QUESTIONS.length - 1) {
            state.currentIndex++;
            updateUI();
        }
    });
    
    elements.submitBtn.addEventListener('click', showResult);
    elements.shareBtn.addEventListener('click', shareResult);
    
    elements.copyBtn.addEventListener('click', () => {
        const result = window.currentResult;
        if (!result) return;
        
        const shareText = '我在SBTI人格测试中被判定为「' + result.type.name + '」！\n匹配度：' + result.matchPercent + '%\n\n' + result.type.description;
        copyToClipboard(shareText);
        alert('结果已复制到剪贴板！');
    });
    
    elements.restartBtn.addEventListener('click', () => {
        showPage('home');
    });
    
    // 侧边栏点击跳转
    elements.leftContent.addEventListener('click', () => {
        if (state.currentIndex > 0) {
            state.currentIndex--;
            updateUI();
        }
    });
    
    elements.rightContent.addEventListener('click', () => {
        if (state.currentIndex < QUESTIONS.length - 1) {
            state.currentIndex++;
            updateUI();
        }
    });
    
    // 键盘快捷键支持
    document.addEventListener('keydown', (e) => {
        if (pages.test.classList.contains('active')) {
            if (e.key === 'ArrowLeft' && state.currentIndex > 0) {
                state.currentIndex--;
                updateUI();
            } else if (e.key === 'ArrowRight' && state.currentIndex < QUESTIONS.length - 1) {
                state.currentIndex++;
                updateUI();
            } else if (e.key >= '1' && e.key <= '4') {
                const optionIndex = parseInt(e.key) - 1;
                const currentQ = QUESTIONS[state.currentIndex];
                if (optionIndex < currentQ.options.length) {
                    const opt = currentQ.options[optionIndex];
                    const optionEl = document.querySelector('[data-label="' + opt.label + '"][data-question-id="' + currentQ.id + '"]');
                    if (optionEl) {
                        optionEl.click();
                    }
                }
            }
        }
    });
});
